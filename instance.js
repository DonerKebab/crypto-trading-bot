var c = module.exports = {}

c.symbols = []

// bitfinex
let x = [
    'BTCUSD', 'EOSUSD', 'BCHUSD', 'LTCUSD', 'ETHUSD', 'ETCUSD', 'NEOUSD', 'IOTUSD', 'XMRUSD', 'XRPUSD', 'DSHUSD', 'ZECUSD', 'OMGUSD', 'ETPUSD',
    'EOSBTC', 'BCHBTC', 'LTCBTC', 'ETHBTC', 'ETCBTC', 'NEOBTC', 'IOTBTC', 'XMRBTC', 'XRPBTC', 'DSHBTC', 'ZECBTC', 'OMGBTC', 'ETPBTC',
]

x.forEach((pair) => {
    c.symbols.push({
        'symbol': pair,
        'periods': ['1m', '15m', '1h'],
        'exchange': 'bitfinex',
        'state': 'watch',
        'strategies': [
            {
                'strategy': 'cci',
                'options': {
                    'period': '15m'
                }
            },
            {
                'strategy': 'macd',
                'options': {
                    'period': '1h'
                }
            }
        ]
    })
})