"""python -m pahaadpath <command>

  fetch-train   download ERA5 daily rain for training (2007 to 2017) and for the news closure days (needs internet)
  train         fit the v5 model, validate it year by year and on the closure days, write data/model/
  pack          download today's forecast and write the small data pack phones fetch when they get signal
  serve         run the road report sync server (see pahaadpath/server.py)
"""
import argparse
import json
import sys

from . import read_json, write_json


def main(argv=None):
    ap = argparse.ArgumentParser(prog='pahaadpath', description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest='cmd', required=True)
    sub.add_parser('fetch-train')
    sub.add_parser('train')
    p = sub.add_parser('pack')
    p.add_argument('--out', default='dist/pack/pack.json')
    s = sub.add_parser('serve')
    s.add_argument('--host', default='0.0.0.0')
    s.add_argument('--port', type=int, default=8787)
    s.add_argument('--db', default='reports.sqlite3')
    a = ap.parse_args(argv)

    from .network import Network
    if a.cmd == 'fetch-train':
        from .dataset import fetch_external, fetch_training
        net = Network()
        write_json(fetch_training(net), 'data', 'train', 'era5_daily_2007_2017.json')
        write_json(fetch_external(net, read_json('replay_source', 'gt.json')), 'data', 'train', 'era5_daily_external.json')
    elif a.cmd == 'train':
        from .model import external, train
        from .report import write_report
        net = Network()
        m = train(net, read_json('data', 'train', 'era5_daily_2007_2017.json'))
        ext = external(m, net, read_json('replay_source', 'gt.json'), read_json('data', 'train', 'era5_daily_external.json'))
        m['external'] = {'events': [{k: v for k, v in e.items() if k != 'rows'} for e in ext['events']], 'season2025': ext['season2025']}
        write_json(m, 'data', 'model', 'model_v5.json', indent=1)
        write_json(ext, 'data', 'model', 'external_scores.json')
        print(write_report(m, ext))
    elif a.cmd == 'pack':
        from .pack import build_pack
        import os
        pk = build_pack(Network())
        os.makedirs(os.path.dirname(os.path.abspath(a.out)), exist_ok=True)
        with open(a.out, 'w', encoding='utf-8') as f:
            json.dump(pk, f, separators=(',', ':'))
        print('pack', a.out, pk['hour0'], len(pk['hourly']), 'places')
    elif a.cmd == 'serve':
        from .server import serve
        serve(a.host, a.port, a.db)
    return 0


if __name__ == '__main__':
    sys.exit(main())
