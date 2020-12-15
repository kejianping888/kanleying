var CryptoJS = require('crypto-js')

// var ss = {
//   "code": "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"
//   , "iv": "2fd45ff821e6be43feddbfded9e5494f",
//   "salt": "2bc88914dee6982a22a28d0bad80613c37a53ee8462ae9331216897c00a970d91ee4733205cdc7227a683bdfece320d3359527b2e61a53c1c8950c8ba28f61105f5071fa8de25ba1cf475a2d9f0abdb59fe19d445845db689c77d4898ddd148cbe5a04622aa628e9ee1f2dcaef9b49f85a51b9d4c704250850a61c744d636e89bedca729873a11f68df5d52d0ed95471bb14ff1cace3279ca1082b59b076e100cdb3e1826dc5447360652c687a8568b003c7a0a4913171c48233fe5ead9c5791317a8898dc10eb70e1fe5fb51b758064e978743267fab9151bc14265588f1e5734448e5ce052c73ff2345ed58466e0839acef7fa3f5263a0dc5d1303e301c743"
// };
var ss = {'code': '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',
 'iv': '2a3abbf34869be1d715aefd76abbd9f2',
 'salt': '17a60c3dc000f59f895adc1e6eb5ee28de111ee6e68f71bf7b3694fd38b56a5a4f8daa8495fc0ef6764776f6535e1f1e8932c0ff7257bbdd912221fb9eb9e0566aa4e269059b2eb9c3001a293635eb04a6d08843bb5fba7c07eba96a0918804fb4294c32553eaba985e924b95159a69942592bef81b4e4de5eaf344b6b3b076dd4a8df35f6e68d5ca3e03f63308bb709309a2d5cf245d0789fac6f9792d921c7d298de8039d9e845da63ef02af4cc71f0badf1ffd2ff0e302386981703130792c2c26f18c4fe28916f56d0efd9c03e7be822ccac8ae1eda9de9495c1792d7f02a225b872890ec1cc172879a3db362f472b90588026538d2c6daf64f66821dcf0'}


// ReadJs['dct']('c1zbnttrabim', ss)
function getArr(ss) {
  // var ss = eval(ss)
  var a = CryptoJS.PBKDF2('c1zbnttrabim', CryptoJS.enc.Hex.parse(ss['salt']), {
    'hasher': CryptoJS.algo.SHA512,
    'keySize': 8,
    'iterations': 999
  })
  var b = CryptoJS.AES.decrypt(ss['code'], a, {
    'iv': CryptoJS.enc.Hex.parse(ss['iv'])
  });
  return JSON.parse(b['toString'](CryptoJS.enc.Utf8))
}

console.log(getArr(ss));