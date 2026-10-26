import os
import sys
import unittest

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from pahaadpath import read_json  # noqa: E402
from pahaadpath.engine import score_day  # noqa: E402
from pahaadpath.network import Network  # noqa: E402


class EngineParity(unittest.TestCase):
    """The Python port must reproduce the scores the app itself computed in the browser on 26 Oct 2026."""

    @classmethod
    def setUpClass(cls):
        cls.net = Network()
        cls.rp = read_json('data', 'replay_results_2026-10-26.json')

    def test_network(self):
        self.assertEqual(len(self.net.links), 75)
        self.assertEqual(len(self.net.hill()), 44)
        self.assertEqual(max(len(l['events']) for l in self.net.hill()), 15)

    def test_replay_rows_match_app(self):
        n = 0
        for key, res in self.rp['results'].items():
            if not key.endswith('/archive/dem+nasa'):
                continue
            rec = self.rp['series'][res['event'] + '/archive']
            rows = {r['id']: r for r in score_day(self.net, res['date'], rec)}
            for want in res['rows']:
                got = rows[want['id']]
                self.assertEqual((got['score'], got['hour']), (want['score'], want['hour']), (key, want['id']))
                n += 1
        self.assertEqual(n, 4 * 44)


if __name__ == '__main__':
    unittest.main()
