(function ( $ ) {

    var AG = new AvatarGenerate();
    var palettesJSON = {"1":{"14":{"index":0,"club":0,"selectable":1,"hex":"F5DA88"},"10":{"index":1,"club":0,"selectable":1,"hex":"FFDBC1"},"1":{"index":2,"club":0,"selectable":1,"hex":"FFCB98"},"8":{"index":3,"club":0,"selectable":1,"hex":"F4AC54"},"12":{"index":4,"club":0,"selectable":1,"hex":"FF987F"},"1369":{"index":5,"club":0,"selectable":1,"hex":"e0a9a9"},"1370":{"index":6,"club":0,"selectable":1,"hex":"ca8154"},"19":{"index":7,"club":0,"selectable":1,"hex":"B87560"},"20":{"index":8,"club":0,"selectable":1,"hex":"9C543F"},"1371":{"index":9,"club":0,"selectable":1,"hex":"904925"},"30":{"index":10,"club":0,"selectable":1,"hex":"4C311E"},"1372":{"index":11,"club":2,"selectable":1,"hex":"543d35"},"1373":{"index":12,"club":2,"selectable":1,"hex":"653a1d"},"21":{"index":13,"club":2,"selectable":1,"hex":"6E392C"},"1374":{"index":14,"club":2,"selectable":1,"hex":"714947"},"1375":{"index":15,"club":2,"selectable":1,"hex":"856860"},"1376":{"index":16,"club":2,"selectable":1,"hex":"895048"},"1377":{"index":17,"club":2,"selectable":1,"hex":"a15253"},"1378":{"index":18,"club":2,"selectable":1,"hex":"aa7870"},"1379":{"index":19,"club":2,"selectable":1,"hex":"be8263"},"1380":{"index":20,"club":2,"selectable":1,"hex":"b6856d"},"1381":{"index":21,"club":2,"selectable":1,"hex":"ba8a82"},"1382":{"index":22,"club":2,"selectable":1,"hex":"c88f82"},"1383":{"index":23,"club":2,"selectable":1,"hex":"d9a792"},"1384":{"index":24,"club":2,"selectable":1,"hex":"c68383"},"1368":{"index":25,"club":2,"selectable":1,"hex":"BC576A"},"1367":{"index":26,"club":2,"selectable":1,"hex":"FF5757"},"1366":{"index":27,"club":2,"selectable":1,"hex":"FF7575"},"1358":{"index":28,"club":2,"selectable":1,"hex":"B65E38"},"1385":{"index":29,"club":2,"selectable":1,"hex":"a76644"},"1386":{"index":30,"club":2,"selectable":1,"hex":"7c5133"},"1387":{"index":31,"club":2,"selectable":1,"hex":"9a7257"},"5":{"index":32,"club":2,"selectable":1,"hex":"945C2F"},"1389":{"index":33,"club":2,"selectable":1,"hex":"d98c63"},"4":{"index":34,"club":2,"selectable":1,"hex":"AE7748"},"1388":{"index":35,"club":2,"selectable":1,"hex":"c57040"},"1359":{"index":36,"club":2,"selectable":1,"hex":"B88655"},"3":{"index":37,"club":2,"selectable":1,"hex":"C99263"},"18":{"index":38,"club":2,"selectable":1,"hex":"A89473"},"17":{"index":39,"club":2,"selectable":1,"hex":"C89F56"},"9":{"index":40,"club":2,"selectable":1,"hex":"DC9B4C"},"1357":{"index":41,"club":2,"selectable":1,"hex":"FF8C40"},"1390":{"index":42,"club":2,"selectable":1,"hex":"de9d75"},"1391":{"index":43,"club":2,"selectable":1,"hex":"eca782"},"11":{"index":44,"club":2,"selectable":1,"hex":"FFB696"},"2":{"index":45,"club":2,"selectable":1,"hex":"E3AE7D"},"7":{"index":46,"club":2,"selectable":1,"hex":"FFC680"},"15":{"index":47,"club":2,"selectable":1,"hex":"DFC375"},"13":{"index":48,"club":2,"selectable":1,"hex":"F0DCA3"},"22":{"index":49,"club":2,"selectable":1,"hex":"EAEFD0"},"23":{"index":50,"club":2,"selectable":1,"hex":"E2E4B0"},"24":{"index":51,"club":2,"selectable":1,"hex":"D5D08C"},"1361":{"index":52,"club":2,"selectable":1,"hex":"BDE05F"},"1362":{"index":53,"club":2,"selectable":1,"hex":"5DC446"},"1360":{"index":54,"club":2,"selectable":1,"hex":"A2CC89"},"26":{"index":55,"club":2,"selectable":1,"hex":"C2C4A7"},"28":{"index":56,"club":2,"selectable":1,"hex":"F1E5DA"},"1392":{"index":57,"club":2,"selectable":1,"hex":"f6d3d4"},"1393":{"index":58,"club":2,"selectable":1,"hex":"e5b6b0"},"25":{"index":59,"club":2,"selectable":1,"hex":"C4A7B3"},"1363":{"index":60,"club":2,"selectable":1,"hex":"AC94B3"},"1364":{"index":61,"club":2,"selectable":1,"hex":"D288CE"},"1365":{"index":62,"club":2,"selectable":1,"hex":"6799CC"},"29":{"index":63,"club":2,"selectable":1,"hex":"B3BDC3"},"27":{"index":64,"club":2,"selectable":1,"hex":"C5C0C2"},"1001":{"index":65,"club":0,"selectable":0,"hex":"644628"},"1002":{"index":66,"club":0,"selectable":0,"hex":"926338"},"1003":{"index":67,"club":0,"selectable":0,"hex":"A97C44"},"1004":{"index":68,"club":0,"selectable":0,"hex":"B3957F"},"1005":{"index":69,"club":0,"selectable":0,"hex":"BD9562"},"1006":{"index":70,"club":0,"selectable":0,"hex":"C2A896"},"1007":{"index":71,"club":0,"selectable":0,"hex":"CA9072"},"1008":{"index":72,"club":0,"selectable":0,"hex":"CBBC90"},"1009":{"index":73,"club":0,"selectable":0,"hex":"D1A78C"},"1010":{"index":74,"club":0,"selectable":0,"hex":"D1BCAD"},"1011":{"index":75,"club":0,"selectable":0,"hex":"D7BCA9"},"1012":{"index":76,"club":0,"selectable":0,"hex":"D7CBA3"},"1013":{"index":77,"club":0,"selectable":0,"hex":"D8A595"},"1014":{"index":78,"club":0,"selectable":0,"hex":"D8B07E"},"1015":{"index":79,"club":0,"selectable":0,"hex":"E0BD91"},"1016":{"index":80,"club":0,"selectable":0,"hex":"E0D0C5"},"1017":{"index":81,"club":0,"selectable":0,"hex":"E2DBB9"},"1018":{"index":82,"club":0,"selectable":0,"hex":"E3D38D"},"1019":{"index":83,"club":0,"selectable":0,"hex":"E7C9A3"},"1020":{"index":84,"club":0,"selectable":0,"hex":"EDD7BB"},"1021":{"index":85,"club":0,"selectable":0,"hex":"EEE7E0"},"1022":{"index":86,"club":0,"selectable":0,"hex":"EFC3B6"},"1023":{"index":87,"club":0,"selectable":0,"hex":"F1D6B4"},"1024":{"index":88,"club":0,"selectable":0,"hex":"F8E5DA"},"1025":{"index":89,"club":0,"selectable":0,"hex":"FDDACF"},"1026":{"index":90,"club":0,"selectable":0,"hex":"FFCC99"},"6":{"index":91,"club":0,"selectable":0,"hex":"6E482C"},"16":{"index":92,"club":0,"selectable":0,"hex":"EFD17D"}},"2":{"40":{"index":0,"club":0,"selectable":1,"hex":"D8D3D9"},"34":{"index":1,"club":0,"selectable":1,"hex":"FFEEB9"},"35":{"index":2,"club":0,"selectable":1,"hex":"F6D059"},"36":{"index":3,"club":0,"selectable":1,"hex":"F2B11D"},"31":{"index":4,"club":0,"selectable":1,"hex":"FFD6A9"},"32":{"index":5,"club":0,"selectable":1,"hex":"DFA66F"},"37":{"index":6,"club":0,"selectable":1,"hex":"9A5D2E"},"38":{"index":7,"club":0,"selectable":1,"hex":"AC5300"},"43":{"index":8,"club":0,"selectable":1,"hex":"F29159"},"46":{"index":9,"club":0,"selectable":1,"hex":"FF8746"},"47":{"index":10,"club":0,"selectable":1,"hex":"FC610C"},"48":{"index":11,"club":0,"selectable":1,"hex":"DE3900"},"44":{"index":12,"club":0,"selectable":1,"hex":"9E3D3B"},"39":{"index":13,"club":0,"selectable":1,"hex":"783400"},"45":{"index":14,"club":0,"selectable":1,"hex":"5C4332"},"42":{"index":15,"club":0,"selectable":1,"hex":"4A4656"},"61":{"index":16,"club":2,"selectable":1,"hex":"2D2D2D"},"1394":{"index":17,"club":2,"selectable":1,"hex":"3f2113"},"1395":{"index":18,"club":2,"selectable":1,"hex":"774422"},"33":{"index":19,"club":2,"selectable":1,"hex":"D1803A"},"1396":{"index":20,"club":2,"selectable":1,"hex":"cc8b33"},"1397":{"index":21,"club":2,"selectable":1,"hex":"e5ba6a"},"1398":{"index":22,"club":2,"selectable":1,"hex":"f6d990"},"49":{"index":23,"club":2,"selectable":1,"hex":"FFFFFF"},"1342":{"index":24,"club":2,"selectable":1,"hex":"fffdd6"},"1343":{"index":25,"club":2,"selectable":1,"hex":"fff392"},"1399":{"index":26,"club":2,"selectable":1,"hex":"ffff00"},"1344":{"index":27,"club":2,"selectable":1,"hex":"ffe508"},"1400":{"index":28,"club":2,"selectable":1,"hex":"ff7716"},"1401":{"index":29,"club":2,"selectable":1,"hex":"aa2c1b"},"59":{"index":30,"club":2,"selectable":1,"hex":"E71B0A"},"1345":{"index":31,"club":2,"selectable":1,"hex":"ff3e3e"},"1348":{"index":32,"club":2,"selectable":1,"hex":"ff638f"},"54":{"index":33,"club":2,"selectable":1,"hex":"FFBDBC"},"1346":{"index":34,"club":2,"selectable":1,"hex":"ffddf1"},"1347":{"index":35,"club":2,"selectable":1,"hex":"ffaedc"},"55":{"index":36,"club":2,"selectable":1,"hex":"DE34A4"},"1349":{"index":37,"club":2,"selectable":1,"hex":"9e326a"},"56":{"index":38,"club":2,"selectable":1,"hex":"9F5699"},"1350":{"index":39,"club":2,"selectable":1,"hex":"8a4fb5"},"1351":{"index":40,"club":2,"selectable":1,"hex":"722ba6"},"1352":{"index":41,"club":2,"selectable":1,"hex":"4c1d6f"},"1402":{"index":42,"club":2,"selectable":1,"hex":"322c7a"},"1403":{"index":43,"club":2,"selectable":1,"hex":"71584a"},"1404":{"index":44,"club":2,"selectable":1,"hex":"aa8864"},"1405":{"index":45,"club":2,"selectable":1,"hex":"bbb1aa"},"1353":{"index":46,"club":2,"selectable":1,"hex":"c1c6ef"},"57":{"index":47,"club":2,"selectable":1,"hex":"D5F9FB"},"60":{"index":48,"club":2,"selectable":1,"hex":"95FFFA"},"58":{"index":49,"club":2,"selectable":1,"hex":"6699CC"},"1354":{"index":50,"club":2,"selectable":1,"hex":"4481e5"},"1355":{"index":51,"club":2,"selectable":1,"hex":"2c50aa"},"1356":{"index":52,"club":2,"selectable":1,"hex":"2a4167"},"53":{"index":53,"club":2,"selectable":1,"hex":"3A7B93"},"52":{"index":54,"club":2,"selectable":1,"hex":"339966"},"1406":{"index":55,"club":2,"selectable":1,"hex":"70c100"},"51":{"index":56,"club":2,"selectable":1,"hex":"A3FF8F"},"1316":{"index":57,"club":2,"selectable":1,"hex":"D2FF00"},"50":{"index":58,"club":2,"selectable":1,"hex":"E5FF09"},"41":{"index":59,"club":2,"selectable":1,"hex":"918D98"},"1407":{"index":60,"club":2,"selectable":1,"hex":"333333"},"1027":{"index":61,"club":0,"selectable":0,"hex":"00FA00"},"1028":{"index":62,"club":0,"selectable":0,"hex":"0A0A0A"},"1029":{"index":63,"club":0,"selectable":0,"hex":"105262"},"1030":{"index":64,"club":0,"selectable":0,"hex":"106262"},"1031":{"index":65,"club":0,"selectable":0,"hex":"1E3214"},"1032":{"index":66,"club":0,"selectable":0,"hex":"20B4A4"},"1033":{"index":67,"club":0,"selectable":0,"hex":"234CAF"},"1034":{"index":68,"club":0,"selectable":0,"hex":"248954"},"1035":{"index":69,"club":0,"selectable":0,"hex":"282828"},"1036":{"index":70,"club":0,"selectable":0,"hex":"292929"},"1037":{"index":71,"club":0,"selectable":0,"hex":"298BB4"},"1038":{"index":72,"club":0,"selectable":0,"hex":"2DA5E9"},"1039":{"index":73,"club":0,"selectable":0,"hex":"319CF6"},"1040":{"index":74,"club":0,"selectable":0,"hex":"31F6DE"},"1041":{"index":75,"club":0,"selectable":0,"hex":"322F3E"},"1042":{"index":76,"club":0,"selectable":0,"hex":"323235"},"1043":{"index":77,"club":0,"selectable":0,"hex":"325B6A"},"1044":{"index":78,"club":0,"selectable":0,"hex":"3296FA"},"1045":{"index":79,"club":0,"selectable":0,"hex":"333333"},"1046":{"index":80,"club":0,"selectable":0,"hex":"394194"},"1047":{"index":81,"club":0,"selectable":0,"hex":"463C14"},"1048":{"index":82,"club":0,"selectable":0,"hex":"4A6A18"},"1049":{"index":83,"club":0,"selectable":0,"hex":"4B5A5A"},"1050":{"index":84,"club":0,"selectable":0,"hex":"4D3223"},"1051":{"index":85,"club":0,"selectable":0,"hex":"4F87C0"},"1052":{"index":86,"club":0,"selectable":0,"hex":"579E1F"},"1053":{"index":87,"club":0,"selectable":0,"hex":"5A480A"},"1054":{"index":88,"club":0,"selectable":0,"hex":"5A837B"},"1055":{"index":89,"club":0,"selectable":0,"hex":"624A41"},"1056":{"index":90,"club":0,"selectable":0,"hex":"625A20"},"1057":{"index":91,"club":0,"selectable":0,"hex":"626262"},"1058":{"index":92,"club":0,"selectable":0,"hex":"646D6C"},"1059":{"index":93,"club":0,"selectable":0,"hex":"662608"},"1060":{"index":94,"club":0,"selectable":0,"hex":"666666"},"1061":{"index":95,"club":0,"selectable":0,"hex":"674E3B"},"1062":{"index":96,"club":0,"selectable":0,"hex":"6A3910"},"1063":{"index":97,"club":0,"selectable":0,"hex":"736346"},"1064":{"index":98,"club":0,"selectable":0,"hex":"781414"},"1065":{"index":99,"club":0,"selectable":0,"hex":"784215"},"1066":{"index":100,"club":0,"selectable":0,"hex":"786D5A"},"1067":{"index":101,"club":0,"selectable":0,"hex":"7B1894"},"1068":{"index":102,"club":0,"selectable":0,"hex":"7D5B17"},"1069":{"index":103,"club":0,"selectable":0,"hex":"80557C"},"1070":{"index":104,"club":0,"selectable":0,"hex":"833141"},"1071":{"index":105,"club":0,"selectable":0,"hex":"8A4924"},"1072":{"index":106,"club":0,"selectable":0,"hex":"8B1820"},"1073":{"index":107,"club":0,"selectable":0,"hex":"8C694B"},"1074":{"index":108,"club":0,"selectable":0,"hex":"8C967E"},"1075":{"index":109,"club":0,"selectable":0,"hex":"904839"},"1076":{"index":110,"club":0,"selectable":0,"hex":"926338"},"1077":{"index":111,"club":0,"selectable":0,"hex":"946220"},"1078":{"index":112,"club":0,"selectable":0,"hex":"947BAC"},"1079":{"index":113,"club":0,"selectable":0,"hex":"948B6A"},"1080":{"index":114,"club":0,"selectable":0,"hex":"94BD29"},"1081":{"index":115,"club":0,"selectable":0,"hex":"94DFFF"},"1082":{"index":116,"club":0,"selectable":0,"hex":"94FFD5"},"1083":{"index":117,"club":0,"selectable":0,"hex":"976D3E"},"1084":{"index":118,"club":0,"selectable":0,"hex":"9CF068"},"1085":{"index":119,"club":0,"selectable":0,"hex":"9E3F0B"},"1086":{"index":120,"club":0,"selectable":0,"hex":"A08C64"},"1087":{"index":121,"club":0,"selectable":0,"hex":"A4A4A4"},"1088":{"index":122,"club":0,"selectable":0,"hex":"A4DEFF"},"1089":{"index":123,"club":0,"selectable":0,"hex":"A55A18"},"1090":{"index":124,"club":0,"selectable":0,"hex":"A7272C"},"1091":{"index":125,"club":0,"selectable":0,"hex":"A97C44"},"1092":{"index":126,"club":0,"selectable":0,"hex":"B29B86"},"1093":{"index":127,"club":0,"selectable":0,"hex":"B2A590"},"1094":{"index":128,"club":0,"selectable":0,"hex":"B3957F"},"1095":{"index":129,"club":0,"selectable":0,"hex":"B429CD"},"1096":{"index":130,"club":0,"selectable":0,"hex":"B4EE29"},"1097":{"index":131,"club":0,"selectable":0,"hex":"B58B5C"},"1098":{"index":132,"club":0,"selectable":0,"hex":"B9A16E"},"1099":{"index":133,"club":0,"selectable":0,"hex":"BD9562"},"1100":{"index":134,"club":0,"selectable":0,"hex":"BD9CFF"},"1101":{"index":135,"club":0,"selectable":0,"hex":"BDBD9D"},"1102":{"index":136,"club":0,"selectable":0,"hex":"C21A86"},"1103":{"index":137,"club":0,"selectable":0,"hex":"C29C57"},"1104":{"index":138,"club":0,"selectable":0,"hex":"C2A896"},"1105":{"index":139,"club":0,"selectable":0,"hex":"C2E3E8"},"1106":{"index":140,"club":0,"selectable":0,"hex":"C376C4"},"1107":{"index":141,"club":0,"selectable":0,"hex":"C4FFFF"},"1108":{"index":142,"club":0,"selectable":0,"hex":"C54A29"},"1109":{"index":143,"club":0,"selectable":0,"hex":"C59462"},"1110":{"index":144,"club":0,"selectable":0,"hex":"C8D2E6"},"1111":{"index":145,"club":0,"selectable":0,"hex":"C96B2F"},"1112":{"index":146,"club":0,"selectable":0,"hex":"CA5A1E"},"1113":{"index":147,"club":0,"selectable":0,"hex":"CA5A33"},"1114":{"index":148,"club":0,"selectable":0,"hex":"CA9072"},"1115":{"index":149,"club":0,"selectable":0,"hex":"CBBC90"},"1116":{"index":150,"club":0,"selectable":0,"hex":"CD99C7"},"1117":{"index":151,"club":0,"selectable":0,"hex":"CF6254"},"1118":{"index":152,"club":0,"selectable":0,"hex":"D1A78C"},"1119":{"index":153,"club":0,"selectable":0,"hex":"D1BCAD"},"1120":{"index":154,"club":0,"selectable":0,"hex":"D2C8CC"},"1121":{"index":155,"club":0,"selectable":0,"hex":"D45B0A"},"1122":{"index":156,"club":0,"selectable":0,"hex":"D4FE80"},"1123":{"index":157,"club":0,"selectable":0,"hex":"D54173"},"1124":{"index":158,"club":0,"selectable":0,"hex":"D5FF9C"},"1125":{"index":159,"club":0,"selectable":0,"hex":"D7BCA9"},"1126":{"index":160,"club":0,"selectable":0,"hex":"D7CBA3"},"1127":{"index":161,"club":0,"selectable":0,"hex":"D8A595"},"1128":{"index":162,"club":0,"selectable":0,"hex":"D8B07E"},"1129":{"index":163,"club":0,"selectable":0,"hex":"DA945E"},"1130":{"index":164,"club":0,"selectable":0,"hex":"DB7C62"},"1131":{"index":165,"club":0,"selectable":0,"hex":"DCDCC8"},"1132":{"index":166,"club":0,"selectable":0,"hex":"DDA934"},"1133":{"index":167,"club":0,"selectable":0,"hex":"DE73DE"},"1134":{"index":168,"club":0,"selectable":0,"hex":"DEDEDE"},"1135":{"index":169,"club":0,"selectable":0,"hex":"DFDAB4"},"1136":{"index":170,"club":0,"selectable":0,"hex":"DFDABE"},"1137":{"index":171,"club":0,"selectable":0,"hex":"E0BA78"},"1138":{"index":172,"club":0,"selectable":0,"hex":"E0BD91"},"1139":{"index":173,"club":0,"selectable":0,"hex":"E0D0C5"},"1140":{"index":174,"club":0,"selectable":0,"hex":"E1CC78"},"1141":{"index":175,"club":0,"selectable":0,"hex":"E2DBB9"},"1142":{"index":176,"club":0,"selectable":0,"hex":"E63139"},"1143":{"index":177,"club":0,"selectable":0,"hex":"E6A4F6"},"1144":{"index":178,"club":0,"selectable":0,"hex":"E7C9A3"},"1145":{"index":179,"club":0,"selectable":0,"hex":"E7E92D"},"1146":{"index":180,"club":0,"selectable":0,"hex":"EA5959"},"1147":{"index":181,"club":0,"selectable":0,"hex":"ECFFED"},"1148":{"index":182,"club":0,"selectable":0,"hex":"EDD7BB"},"1149":{"index":183,"club":0,"selectable":0,"hex":"EEE7E0"},"1150":{"index":184,"club":0,"selectable":0,"hex":"EEEEEE"},"1151":{"index":185,"club":0,"selectable":0,"hex":"EFC3B6"},"1152":{"index":186,"club":0,"selectable":0,"hex":"F1D6B4"},"1153":{"index":187,"club":0,"selectable":0,"hex":"F6AC31"},"1154":{"index":188,"club":0,"selectable":0,"hex":"F73B32"},"1155":{"index":189,"club":0,"selectable":0,"hex":"F8E5DA"},"1156":{"index":190,"club":0,"selectable":0,"hex":"FDA61E"},"1157":{"index":191,"club":0,"selectable":0,"hex":"FDDACF"},"1158":{"index":192,"club":0,"selectable":0,"hex":"FE6D6D"},"1159":{"index":193,"club":0,"selectable":0,"hex":"FE834D"},"1160":{"index":194,"club":0,"selectable":0,"hex":"FF0000"},"1161":{"index":195,"club":0,"selectable":0,"hex":"FF006A"},"1162":{"index":196,"club":0,"selectable":0,"hex":"FF4814"},"1163":{"index":197,"club":0,"selectable":0,"hex":"FF4C2F"},"1164":{"index":198,"club":0,"selectable":0,"hex":"FF5F9B"},"1165":{"index":199,"club":0,"selectable":0,"hex":"FF7329"},"1166":{"index":200,"club":0,"selectable":0,"hex":"FF7383"},"1167":{"index":201,"club":0,"selectable":0,"hex":"FF7BDE"},"1168":{"index":202,"club":0,"selectable":0,"hex":"FF9C62"},"1169":{"index":203,"club":0,"selectable":0,"hex":"FFA772"},"1170":{"index":204,"club":0,"selectable":0,"hex":"FFADAE"},"1171":{"index":205,"club":0,"selectable":0,"hex":"FFBC42"},"1172":{"index":206,"club":0,"selectable":0,"hex":"FFBDBD"},"1173":{"index":207,"club":0,"selectable":0,"hex":"FFBE73"},"1174":{"index":208,"club":0,"selectable":0,"hex":"FFC53A"},"1175":{"index":209,"club":0,"selectable":0,"hex":"FFCD94"},"1176":{"index":210,"club":0,"selectable":0,"hex":"FFCD9B"},"1177":{"index":211,"club":0,"selectable":0,"hex":"FFDC7A"},"1178":{"index":212,"club":0,"selectable":0,"hex":"FFE639"},"1179":{"index":213,"club":0,"selectable":0,"hex":"FFE673"},"1180":{"index":214,"club":0,"selectable":0,"hex":"FFEAAC"},"1181":{"index":215,"club":0,"selectable":0,"hex":"FFEAAD"},"1182":{"index":216,"club":0,"selectable":0,"hex":"FFEEC5"},"1183":{"index":217,"club":0,"selectable":0,"hex":"FFFFFF"}},"3":{"1408":{"index":0,"club":0,"selectable":1,"hex":"dddddd"},"90":{"index":1,"club":0,"selectable":1,"hex":"96743D"},"91":{"index":2,"club":0,"selectable":1,"hex":"6B573B"},"66":{"index":3,"club":0,"selectable":1,"hex":"E7B027"},"1320":{"index":4,"club":0,"selectable":1,"hex":"fff7b7"},"68":{"index":5,"club":0,"selectable":1,"hex":"F8C790"},"73":{"index":6,"club":0,"selectable":1,"hex":"9F2B31"},"72":{"index":7,"club":0,"selectable":1,"hex":"ED5C50"},"71":{"index":8,"club":0,"selectable":1,"hex":"FFBFC2"},"74":{"index":9,"club":0,"selectable":1,"hex":"E7D1EE"},"75":{"index":10,"club":0,"selectable":1,"hex":"AC94B3"},"76":{"index":11,"club":0,"selectable":1,"hex":"7E5B90"},"82":{"index":12,"club":0,"selectable":1,"hex":"4F7AA2"},"81":{"index":13,"club":0,"selectable":1,"hex":"75B7C7"},"80":{"index":14,"club":0,"selectable":1,"hex":"C5EDE6"},"83":{"index":15,"club":0,"selectable":1,"hex":"BBF3BD"},"84":{"index":16,"club":0,"selectable":1,"hex":"6BAE61"},"85":{"index":17,"club":0,"selectable":1,"hex":"456F40"},"88":{"index":18,"club":0,"selectable":1,"hex":"7A7D22"},"64":{"index":19,"club":0,"selectable":1,"hex":"595959"},"110":{"index":20,"club":2,"selectable":1,"hex":"1E1E1E"},"1325":{"index":21,"club":2,"selectable":1,"hex":"84573c"},"67":{"index":22,"club":2,"selectable":1,"hex":"A86B19"},"1409":{"index":23,"club":2,"selectable":1,"hex":"c69f71"},"89":{"index":24,"club":2,"selectable":1,"hex":"F3E1AF"},"92":{"index":25,"club":2,"selectable":1,"hex":"FFFFFF"},"93":{"index":26,"club":2,"selectable":1,"hex":"FFF41D"},"1321":{"index":27,"club":2,"selectable":1,"hex":"ffe508"},"1410":{"index":28,"club":2,"selectable":1,"hex":"ffcc00"},"1322":{"index":29,"club":2,"selectable":1,"hex":"ffa508"},"94":{"index":30,"club":2,"selectable":1,"hex":"FF9211"},"1323":{"index":31,"club":2,"selectable":1,"hex":"ff5b08"},"70":{"index":32,"club":2,"selectable":1,"hex":"C74400"},"1411":{"index":33,"club":2,"selectable":1,"hex":"da6a43"},"1324":{"index":34,"club":2,"selectable":1,"hex":"b18276"},"1329":{"index":35,"club":2,"selectable":1,"hex":"ae4747"},"1330":{"index":36,"club":2,"selectable":1,"hex":"813033"},"1331":{"index":37,"club":2,"selectable":1,"hex":"5b2420"},"100":{"index":38,"club":2,"selectable":1,"hex":"9B001D"},"1412":{"index":39,"club":2,"selectable":1,"hex":"d2183c"},"1413":{"index":40,"club":2,"selectable":1,"hex":"e53624"},"96":{"index":41,"club":2,"selectable":1,"hex":"FF1300"},"1328":{"index":42,"club":2,"selectable":1,"hex":"ff638f"},"1414":{"index":43,"club":2,"selectable":1,"hex":"fe86b1"},"97":{"index":44,"club":2,"selectable":1,"hex":"FF6D8F"},"1326":{"index":45,"club":2,"selectable":1,"hex":"ffc7e4"},"98":{"index":46,"club":2,"selectable":1,"hex":"E993FF"},"1327":{"index":47,"club":2,"selectable":1,"hex":"ff88f4"},"95":{"index":48,"club":2,"selectable":1,"hex":"FF27A6"},"99":{"index":49,"club":2,"selectable":1,"hex":"C600AD"},"1415":{"index":50,"club":2,"selectable":1,"hex":"a1295e"},"1416":{"index":51,"club":2,"selectable":1,"hex":"a723c9"},"1417":{"index":52,"club":2,"selectable":1,"hex":"6a0481"},"1418":{"index":53,"club":2,"selectable":1,"hex":"693959"},"1419":{"index":54,"club":2,"selectable":1,"hex":"62368c"},"79":{"index":55,"club":2,"selectable":1,"hex":"544A81"},"1420":{"index":56,"club":2,"selectable":1,"hex":"957caf"},"78":{"index":57,"club":2,"selectable":1,"hex":"6D80BB"},"1340":{"index":58,"club":2,"selectable":1,"hex":"574bfb"},"1421":{"index":59,"club":2,"selectable":1,"hex":"6b71ed"},"1339":{"index":60,"club":2,"selectable":1,"hex":"8791f0"},"1337":{"index":61,"club":2,"selectable":1,"hex":"c1c6ef"},"105":{"index":62,"club":2,"selectable":1,"hex":"94FFEC"},"104":{"index":63,"club":2,"selectable":1,"hex":"00B9A8"},"1422":{"index":64,"club":2,"selectable":1,"hex":"009db9"},"106":{"index":65,"club":2,"selectable":1,"hex":"1BD2FF"},"1423":{"index":66,"club":2,"selectable":1,"hex":"2f8ce9"},"107":{"index":67,"club":2,"selectable":1,"hex":"1F55FF"},"1424":{"index":68,"club":2,"selectable":1,"hex":"1946c7"},"108":{"index":69,"club":2,"selectable":1,"hex":"0219A5"},"1341":{"index":70,"club":2,"selectable":1,"hex":"394a7e"},"1425":{"index":71,"club":2,"selectable":1,"hex":"2d547b"},"1426":{"index":72,"club":2,"selectable":1,"hex":"406184"},"1338":{"index":73,"club":2,"selectable":1,"hex":"6fa5cc"},"77":{"index":74,"club":2,"selectable":1,"hex":"ACC9E6"},"1427":{"index":75,"club":2,"selectable":1,"hex":"c8c8c8"},"63":{"index":76,"club":2,"selectable":1,"hex":"A4A4A4"},"1428":{"index":77,"club":2,"selectable":1,"hex":"868686"},"1334":{"index":78,"club":2,"selectable":1,"hex":"89906e"},"1335":{"index":79,"club":2,"selectable":1,"hex":"738b6e"},"1429":{"index":80,"club":2,"selectable":1,"hex":"626738"},"109":{"index":81,"club":2,"selectable":1,"hex":"3A5341"},"1336":{"index":82,"club":2,"selectable":1,"hex":"1d301a"},"1430":{"index":83,"club":2,"selectable":1,"hex":"0a6437"},"1431":{"index":84,"club":2,"selectable":1,"hex":"47891f"},"1432":{"index":85,"club":2,"selectable":1,"hex":"10a32f"},"1433":{"index":86,"club":2,"selectable":1,"hex":"69bb2d"},"87":{"index":87,"club":2,"selectable":1,"hex":"BABB3D"},"86":{"index":88,"club":2,"selectable":1,"hex":"EDFF9A"},"1315":{"index":89,"club":2,"selectable":1,"hex":"D2FF00"},"103":{"index":90,"club":2,"selectable":1,"hex":"AFF203"},"102":{"index":91,"club":2,"selectable":1,"hex":"1CDC00"},"101":{"index":92,"club":2,"selectable":1,"hex":"76FF2D"},"1332":{"index":93,"club":2,"selectable":1,"hex":"9eff8d"},"1333":{"index":94,"club":2,"selectable":1,"hex":"a2cc89"},"1184":{"index":95,"club":0,"selectable":0,"hex":"003F1D"},"1185":{"index":96,"club":0,"selectable":0,"hex":"096E16"},"1186":{"index":97,"club":0,"selectable":0,"hex":"105262"},"1187":{"index":98,"club":0,"selectable":0,"hex":"106262"},"1188":{"index":99,"club":0,"selectable":0,"hex":"121D6D"},"1189":{"index":100,"club":0,"selectable":0,"hex":"1F1F1F"},"1190":{"index":101,"club":0,"selectable":0,"hex":"20B4A4"},"1191":{"index":102,"club":0,"selectable":0,"hex":"20B913"},"1192":{"index":103,"club":0,"selectable":0,"hex":"2828C8"},"1193":{"index":104,"club":0,"selectable":0,"hex":"292929"},"1194":{"index":105,"club":0,"selectable":0,"hex":"298BB4"},"1195":{"index":106,"club":0,"selectable":0,"hex":"2F2D26"},"1196":{"index":107,"club":0,"selectable":0,"hex":"319CF6"},"1197":{"index":108,"club":0,"selectable":0,"hex":"31F6DE"},"1198":{"index":109,"club":0,"selectable":0,"hex":"333333"},"1199":{"index":110,"club":0,"selectable":0,"hex":"336633"},"1200":{"index":111,"club":0,"selectable":0,"hex":"365E8A"},"1201":{"index":112,"club":0,"selectable":0,"hex":"378BE8"},"1202":{"index":113,"club":0,"selectable":0,"hex":"37E8C5"},"1203":{"index":114,"club":0,"selectable":0,"hex":"394194"},"1204":{"index":115,"club":0,"selectable":0,"hex":"3B7AC0"},"1205":{"index":116,"club":0,"selectable":0,"hex":"3D3D3D"},"1206":{"index":117,"club":0,"selectable":0,"hex":"406A65"},"1207":{"index":118,"club":0,"selectable":0,"hex":"43001A"},"1208":{"index":119,"club":0,"selectable":0,"hex":"456283"},"1209":{"index":120,"club":0,"selectable":0,"hex":"4A6A18"},"1210":{"index":121,"club":0,"selectable":0,"hex":"4C882B"},"1211":{"index":122,"club":0,"selectable":0,"hex":"5A837B"},"1212":{"index":123,"club":0,"selectable":0,"hex":"5CC445"},"1213":{"index":124,"club":0,"selectable":0,"hex":"5F5F5F"},"1214":{"index":125,"club":0,"selectable":0,"hex":"624A41"},"1215":{"index":126,"club":0,"selectable":0,"hex":"625A20"},"1216":{"index":127,"club":0,"selectable":0,"hex":"626262"},"1217":{"index":128,"club":0,"selectable":0,"hex":"656A40"},"1218":{"index":129,"club":0,"selectable":0,"hex":"666666"},"1219":{"index":130,"club":0,"selectable":0,"hex":"687450"},"1220":{"index":131,"club":0,"selectable":0,"hex":"6A3910"},"1221":{"index":132,"club":0,"selectable":0,"hex":"6A405C"},"1222":{"index":133,"club":0,"selectable":0,"hex":"6A4A40"},"1223":{"index":134,"club":0,"selectable":0,"hex":"779FBB"},"1224":{"index":135,"club":0,"selectable":0,"hex":"795E53"},"1225":{"index":136,"club":0,"selectable":0,"hex":"7B1894"},"1226":{"index":137,"club":0,"selectable":0,"hex":"7B5818"},"1227":{"index":138,"club":0,"selectable":0,"hex":"7C8F7D"},"1228":{"index":139,"club":0,"selectable":0,"hex":"7D0004"},"62":{"index":140,"club":0,"selectable":0,"hex":"EEEEEE"},"1229":{"index":141,"club":0,"selectable":0,"hex":"7D0034"},"65":{"index":142,"club":0,"selectable":0,"hex":"F6E179"},"1230":{"index":143,"club":0,"selectable":0,"hex":"833141"},"69":{"index":144,"club":0,"selectable":0,"hex":"EB7E43"},"1231":{"index":145,"club":0,"selectable":0,"hex":"87D7CD"},"1232":{"index":146,"club":0,"selectable":0,"hex":"88E0DE"},"1233":{"index":147,"club":0,"selectable":0,"hex":"8B1820"},"1234":{"index":148,"club":0,"selectable":0,"hex":"946220"},"1235":{"index":149,"club":0,"selectable":0,"hex":"947BAC"},"1236":{"index":150,"club":0,"selectable":0,"hex":"948B6A"},"1237":{"index":151,"club":0,"selectable":0,"hex":"94BD29"},"1238":{"index":152,"club":0,"selectable":0,"hex":"94FFD5"},"1239":{"index":153,"club":0,"selectable":0,"hex":"95784E"},"1240":{"index":154,"club":0,"selectable":0,"hex":"983E4F"},"1241":{"index":155,"club":0,"selectable":0,"hex":"98863E"},"1242":{"index":156,"club":0,"selectable":0,"hex":"9FD787"},"1243":{"index":157,"club":0,"selectable":0,"hex":"A4A4A4"},"1244":{"index":158,"club":0,"selectable":0,"hex":"A4DEFF"},"1245":{"index":159,"club":0,"selectable":0,"hex":"A88139"},"1246":{"index":160,"club":0,"selectable":0,"hex":"ADD0FF"},"1247":{"index":161,"club":0,"selectable":0,"hex":"AFDCDF"},"1248":{"index":162,"club":0,"selectable":0,"hex":"B3FCFF"},"1249":{"index":163,"club":0,"selectable":0,"hex":"B429CD"},"1250":{"index":164,"club":0,"selectable":0,"hex":"B4EE29"},"1251":{"index":165,"club":0,"selectable":0,"hex":"B6396D"},"1252":{"index":166,"club":0,"selectable":0,"hex":"B79BFF"},"1253":{"index":167,"club":0,"selectable":0,"hex":"B8E737"},"1254":{"index":168,"club":0,"selectable":0,"hex":"BA9D73"},"1255":{"index":169,"club":0,"selectable":0,"hex":"BAAD68"},"1256":{"index":170,"club":0,"selectable":0,"hex":"BAC7FF"},"1257":{"index":171,"club":0,"selectable":0,"hex":"BB2430"},"1258":{"index":172,"club":0,"selectable":0,"hex":"BD9CFF"},"1259":{"index":173,"club":0,"selectable":0,"hex":"BDFFC8"},"1260":{"index":174,"club":0,"selectable":0,"hex":"C0B4C7"},"1261":{"index":175,"club":0,"selectable":0,"hex":"C1C1C1"},"1262":{"index":176,"club":0,"selectable":0,"hex":"C1D2DB"},"1263":{"index":177,"club":0,"selectable":0,"hex":"C54A29"},"1264":{"index":178,"club":0,"selectable":0,"hex":"C59462"},"1265":{"index":179,"club":0,"selectable":0,"hex":"C6B3D6"},"1266":{"index":180,"club":0,"selectable":0,"hex":"C745D9"},"1267":{"index":181,"club":0,"selectable":0,"hex":"CA2221"},"1268":{"index":182,"club":0,"selectable":0,"hex":"CDCDFF"},"1269":{"index":183,"club":0,"selectable":0,"hex":"CDFFB3"},"1270":{"index":184,"club":0,"selectable":0,"hex":"D1DFAF"},"1271":{"index":185,"club":0,"selectable":0,"hex":"D1FFD4"},"1272":{"index":186,"club":0,"selectable":0,"hex":"D54173"},"1273":{"index":187,"club":0,"selectable":0,"hex":"D5FF9C"},"1274":{"index":188,"club":0,"selectable":0,"hex":"D68C8C"},"1275":{"index":189,"club":0,"selectable":0,"hex":"D7C187"},"1276":{"index":190,"club":0,"selectable":0,"hex":"D9457E"},"1277":{"index":191,"club":0,"selectable":0,"hex":"D97145"},"1278":{"index":192,"club":0,"selectable":0,"hex":"DE73DE"},"1279":{"index":193,"club":0,"selectable":0,"hex":"DEDEDE"},"1280":{"index":194,"club":0,"selectable":0,"hex":"DFAFD1"},"1281":{"index":195,"club":0,"selectable":0,"hex":"DFCBAF"},"1282":{"index":196,"club":0,"selectable":0,"hex":"E63139"},"1283":{"index":197,"club":0,"selectable":0,"hex":"E6A4F6"},"1284":{"index":198,"club":0,"selectable":0,"hex":"E8B137"},"1285":{"index":199,"club":0,"selectable":0,"hex":"E8FFFF"},"1286":{"index":200,"club":0,"selectable":0,"hex":"EEEEEE"},"1287":{"index":201,"club":0,"selectable":0,"hex":"F64C3E"},"1288":{"index":202,"club":0,"selectable":0,"hex":"F6AC31"},"1289":{"index":203,"club":0,"selectable":0,"hex":"F9A0A0"},"1290":{"index":204,"club":0,"selectable":0,"hex":"FF006A"},"1291":{"index":205,"club":0,"selectable":0,"hex":"FF1092"},"1292":{"index":206,"club":0,"selectable":0,"hex":"FF45D6"},"1293":{"index":207,"club":0,"selectable":0,"hex":"FF7329"},"1294":{"index":208,"club":0,"selectable":0,"hex":"FF7383"},"1295":{"index":209,"club":0,"selectable":0,"hex":"FF7BDE"},"1296":{"index":210,"club":0,"selectable":0,"hex":"FF8516"},"1297":{"index":211,"club":0,"selectable":0,"hex":"FF9C62"},"1298":{"index":212,"club":0,"selectable":0,"hex":"FFB3D7"},"1299":{"index":213,"club":0,"selectable":0,"hex":"FFB6DE"},"1300":{"index":214,"club":0,"selectable":0,"hex":"FFBDBD"},"1301":{"index":215,"club":0,"selectable":0,"hex":"FFC800"},"1302":{"index":216,"club":0,"selectable":0,"hex":"FFC92B"},"1303":{"index":217,"club":0,"selectable":0,"hex":"FFCD94"},"1304":{"index":218,"club":0,"selectable":0,"hex":"FFCE64"},"1305":{"index":219,"club":0,"selectable":0,"hex":"FFD2B3"},"1306":{"index":220,"club":0,"selectable":0,"hex":"FFE639"},"1307":{"index":221,"club":0,"selectable":0,"hex":"FFE673"},"1308":{"index":222,"club":0,"selectable":0,"hex":"FFEDB3"},"1309":{"index":223,"club":0,"selectable":0,"hex":"FFEE6D"},"1310":{"index":224,"club":0,"selectable":0,"hex":"FFEEC5"},"1311":{"index":225,"club":0,"selectable":0,"hex":"FFFF00"},"1312":{"index":226,"club":0,"selectable":0,"hex":"FFFF66"},"1313":{"index":227,"club":0,"selectable":0,"hex":"FFFFFA"},"1314":{"index":228,"club":0,"selectable":0,"hex":"FFFFFF"}}};
    var setsJSON     = [{"paletteid":2,"type":"hr","sets":{"175":{"gender":"M","club":0,"colorable":0,"selectable":0,"preselectable":1},"3004":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3011":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3012":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3020":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3021":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3024":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3025":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3037":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3040":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3041":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3043":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3044":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3048":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3056":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3090":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3160":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3161":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3162":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3163":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3172":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3194":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3195":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3221":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3247":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3251":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3255":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3256":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3260":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3273":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3278":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3281":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3322":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3325":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3339":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3357":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3369":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3370":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3377":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3386":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3393":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3396":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3436":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3468":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3499":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3516":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3519":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3520":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3525":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3531":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"9534":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"177":{"gender":"M","club":0,"colorable":0,"selectable":0,"preselectable":1},"145":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"580":{"gender":"F","club":0,"colorable":0,"selectable":0,"preselectable":1},"525":{"gender":"F","club":0,"colorable":1,"selectable":0,"preselectable":1},"550":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"595":{"gender":"F","club":0,"colorable":0,"selectable":0,"preselectable":1},"125":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"140":{"gender":"M","club":0,"colorable":1,"selectable":0,"preselectable":1},"176":{"gender":"M","club":0,"colorable":0,"selectable":0,"preselectable":1},"165":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"676":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"105":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"596":{"gender":"F","club":0,"colorable":0,"selectable":1,"preselectable":1},"130":{"gender":"M","club":0,"colorable":1,"selectable":0,"preselectable":1},"155":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"150":{"gender":"M","club":0,"colorable":1,"selectable":0,"preselectable":1},"500":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"555":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"681":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"510":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"565":{"gender":"F","club":0,"colorable":1,"selectable":0,"preselectable":1},"115":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"170":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"505":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"540":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"530":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"515":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"590":{"gender":"F","club":0,"colorable":0,"selectable":0,"preselectable":1},"100":{"gender":"M","club":0,"colorable":0,"selectable":1,"preselectable":1},"679":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"570":{"gender":"F","club":0,"colorable":1,"selectable":0,"preselectable":1},"585":{"gender":"F","club":0,"colorable":0,"selectable":0,"preselectable":1},"135":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"178":{"gender":"M","club":0,"colorable":0,"selectable":0,"preselectable":1},"575":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"535":{"gender":"F","club":0,"colorable":1,"selectable":0,"preselectable":1},"110":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"520":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"120":{"gender":"M","club":0,"colorable":0,"selectable":0,"preselectable":1},"545":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"160":{"gender":"M","club":0,"colorable":1,"selectable":0,"preselectable":1},"889":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"890":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"891":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"892":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"893":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"802":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"869":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"842":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"840":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"828":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"871":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"874":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"859":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"837":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"846":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"800":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"868":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"834":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"866":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"556":{"gender":"F","club":2,"colorable":0,"selectable":0,"preselectable":1},"852":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"830":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"872":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"873":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"831":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"856":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"801":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"836":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"855":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"865":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"810":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"811":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"854":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"833":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"838":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"844":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"835":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"860":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"862":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"858":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"829":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"864":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"849":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"841":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"867":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"870":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"678":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"832":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"847":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"861":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"839":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"845":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"853":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"848":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"857":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"843":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"850":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"863":{"gender":"F","club":2,"colorable":1,"selectable":0,"preselectable":1},"851":{"gender":"M","club":2,"colorable":1,"selectable":0,"preselectable":1},"677":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1}}},{"paletteid":1,"type":"hd","sets":{"620":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"626":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3096":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"180":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"207":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3091":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"205":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"190":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3092":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"625":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"185":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"195":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3093":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"610":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3097":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"200":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"600":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"615":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3098":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"206":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3094":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"627":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"605":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3099":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"208":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"209":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3095":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"628":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"629":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3100":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3101":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3102":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3103":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3104":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3105":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3106":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"ch","sets":{"680":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3001":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3005":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3013":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3014":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3015":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3022":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3030":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3032":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3033":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3036":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3038":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3045":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3046":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3049":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3050":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3051":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3059":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3060":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3067":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3076":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3077":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3109":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3110":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3111":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3112":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3113":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3114":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3133":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3135":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3137":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3165":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3167":{"gender":"M","club":2,"colorable":0,"selectable":1,"preselectable":1},"3183":{"gender":"F","club":2,"colorable":0,"selectable":1,"preselectable":1},"3185":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3197":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3199":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3203":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3208":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3213":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3214":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3215":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3222":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3233":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3234":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3237":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3244":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3245":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3250":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3266":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3279":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3293":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3321":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3323":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3332":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3334":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3335":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3336":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3340":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3342":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3351":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3367":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3368":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3371":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3372":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3399":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3400":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3416":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3417":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3428":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3429":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3432":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3433":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3438":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3439":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3442":{"gender":"F","club":0,"colorable":0,"selectable":1,"preselectable":1},"3443":{"gender":"M","club":0,"colorable":0,"selectable":1,"preselectable":1},"3446":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3459":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3486":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3487":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3489":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3490":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3491":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3492":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3496":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3497":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3498":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3501":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3505":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3506":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3510":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3517":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3518":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3527":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3528":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3529":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3530":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"876":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"675":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"690":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"879":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"210":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"665":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"685":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"267":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"245":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"878":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"670":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"645":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"640":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"220":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"655":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"882":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"881":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"255":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"880":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"875":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"262":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"669":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"691":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"660":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"240":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"250":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"877":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"650":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"215":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"230":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"266":{"gender":"M","club":0,"colorable":0,"selectable":1,"preselectable":1},"235":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"635":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"265":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"667":{"gender":"F","club":0,"colorable":0,"selectable":1,"preselectable":1},"630":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"225":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"807":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"816":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"813":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"812":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"815":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"823":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"804":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"818":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"803":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"814":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"809":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"819":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"824":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"808":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"825":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"822":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"805":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"806":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"821":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"826":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"820":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"817":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"883":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"884":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"885":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"lg","sets":{"715":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3006":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3017":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3018":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3019":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3023":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3047":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3057":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3058":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3061":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3078":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3088":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3116":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3134":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3136":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3138":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3166":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3174":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3190":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3191":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3192":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3198":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3200":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3201":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3202":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3216":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3235":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3257":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3267":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3282":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3283":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3290":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3301":{"gender":"U","club":2,"colorable":0,"selectable":0,"preselectable":1},"3320":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3328":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3333":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3337":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3341":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3353":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3355":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3361":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3364":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3365":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3384":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3387":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3391":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3401":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3407":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3408":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3418":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3434":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3449":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3460":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3483":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3502":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3521":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3526":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"696":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"280":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"285":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"710":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"720":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"270":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"281":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"275":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"700":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"705":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"695":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"827":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"716":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"sh","sets":{"740":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3016":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3027":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3035":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3064":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3068":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3089":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"300":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"735":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"730":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"305":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"295":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"725":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"290":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"905":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"906":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"907":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"908":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3115":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3154":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3180":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3184":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3206":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3252":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3275":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3277":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3338":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3348":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3354":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3375":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3383":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3419":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3435":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3467":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3524":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"ha","sets":{"1010":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1003":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1018":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1020":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1022":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1006":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1021":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1023":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1017":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1002":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1007":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1014":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1005":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1001":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1008":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1015":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1004":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1009":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1013":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1019":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1016":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1024":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1011":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"1012":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"1025":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1026":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1027":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"3026":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3054":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3086":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3117":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3118":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3129":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3130":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3139":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3140":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3144":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3145":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3150":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3156":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3171":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3173":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3179":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3209":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3220":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3231":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3236":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3238":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3240":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3241":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3242":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3243":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3253":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"3254":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3259":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3261":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3265":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3268":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3272":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3291":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3298":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3300":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3303":{"gender":"U","club":2,"colorable":0,"selectable":0,"preselectable":1},"3305":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3331":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3347":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3349":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3352":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3356":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3362":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3363":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3382":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3392":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3394":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3404":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3409":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3415":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3421":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3422":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3426":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3430":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3431":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3440":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3441":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3450":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3451":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3452":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3453":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3454":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3455":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3456":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3457":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3461":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3463":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3477":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3478":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3479":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3480":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3481":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3482":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3488":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3494":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3495":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3500":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3514":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3533":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3534":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3535":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"he","sets":{"1606":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3069":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3070":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3071":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3079":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3081":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3082":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3146":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3149":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3155":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3164":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3181":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"1605":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1602":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1601":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1607":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1604":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1603":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"1608":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1609":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1610":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3188":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3189":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3218":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3227":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3228":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3229":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3239":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3258":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3274":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3295":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3297":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3324":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3329":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3358":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3376":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3379":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3385":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3395":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3465":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3469":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"ea","sets":{"1404":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3083":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3107":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3108":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3141":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"3148":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3168":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3169":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3170":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3196":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3224":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3226":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3262":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3270":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3318":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3388":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3484":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3493":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1401":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1403":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1402":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1405":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1406":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"fa","sets":{"1202":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3147":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3193":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3230":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3276":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3296":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"3344":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3345":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3346":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3350":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"3378":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3462":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3470":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3471":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3472":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3473":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3474":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3475":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3476":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1208":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1206":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1204":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1205":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1201":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1209":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"1203":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1207":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1210":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1211":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1212":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"ca","sets":{"1810":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3084":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3085":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3131":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3151":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3175":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3176":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3177":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3187":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3217":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3219":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3223":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"3225":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3292":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3343":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3410":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3411":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3412":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3413":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3414":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3423":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3424":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3425":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3437":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3444":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3458":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3464":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3466":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3485":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3503":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3511":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"1803":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1806":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1809":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1805":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1801":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1802":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1804":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1808":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1811":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1807":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1812":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1813":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1814":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1815":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"1816":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"1817":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1818":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"1819":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"wa","sets":{"2012":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"3072":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3073":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3074":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3080":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3178":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3210":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3211":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3212":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3263":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3264":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3359":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3366":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3427":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3504":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"2007":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"2006":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"2011":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"2009":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"2008":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"2002":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"2004":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"2001":{"gender":"U","club":0,"colorable":0,"selectable":1,"preselectable":1},"2003":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"2010":{"gender":"F","club":2,"colorable":0,"selectable":1,"preselectable":1},"2005":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"cc","sets":{"3002":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3003":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3007":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3008":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3009":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3010":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3039":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3066":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3075":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3087":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3152":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3153":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3157":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3158":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3159":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3186":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3232":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3246":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3248":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3249":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3269":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"3280":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3289":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3294":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3299":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3302":{"gender":"M","club":2,"colorable":0,"selectable":0,"preselectable":1},"3304":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3326":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3327":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3360":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3373":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3374":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3380":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3381":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3389":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3390":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3397":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3398":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3405":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3406":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3420":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3447":{"gender":"F","club":0,"colorable":0,"selectable":1,"preselectable":1},"3448":{"gender":"M","club":0,"colorable":0,"selectable":1,"preselectable":1},"3507":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3508":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3509":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3512":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3513":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3515":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3522":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3523":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3532":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"9563":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"9865":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"260":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"888":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"886":{"gender":"M","club":2,"colorable":1,"selectable":1,"preselectable":1},"887":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1}}},{"paletteid":3,"type":"cp","sets":{"3119":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3120":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3121":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3122":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3123":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3124":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3125":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3126":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3127":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3128":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3204":{"gender":"M","club":2,"colorable":0,"selectable":1,"preselectable":1},"3205":{"gender":"M","club":2,"colorable":0,"selectable":1,"preselectable":1},"3207":{"gender":"F","club":2,"colorable":1,"selectable":1,"preselectable":1},"3284":{"gender":"M","club":0,"colorable":1,"selectable":1,"preselectable":1},"3285":{"gender":"F","club":0,"colorable":1,"selectable":1,"preselectable":1},"3286":{"gender":"M","club":0,"colorable":0,"selectable":1,"preselectable":1},"3287":{"gender":"F","club":0,"colorable":0,"selectable":1,"preselectable":1},"3288":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3307":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3308":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3309":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3310":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3311":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3312":{"gender":"U","club":2,"colorable":0,"selectable":1,"preselectable":1},"3313":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3314":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3315":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3316":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3317":{"gender":"U","club":2,"colorable":1,"selectable":1,"preselectable":1},"3402":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1},"3403":{"gender":"U","club":0,"colorable":1,"selectable":1,"preselectable":1}}}];


    /*
     * Set both the setTypes and palettes so that we
     * can get the correct clothes and their colours.
     *
     */

    AG.setTypes( setsJSON );
    AG.setPalettes( palettesJSON );


    /*
     * jQuery AvatarGenerate Plugin
     *
     */

    $.fn.setClothes = function() {
        AG.setClothesObject( this );
    };

    $.fn.setColors = function() {
        AG.setColorsObject( this );
    };

    $.fn.setCodeReceiver = function() {
        AG.setCodeObject( this );
    };


    /*
     * Set the correct DOM elements to append our
     * clothes and colors into.
     *
     */

    $( '#clothes' ).setClothes();
    $( '#colors' ).setColors();
    $( '#avatar-code' ).setCodeReceiver();


    /*
     * Set default values
     *
     */

    AG.importFigure( "lg-3058-82.hd-3092-2.ch-3022-64-64.cc-3002-1.hr-3256-61-40" );
    AG.loadToClothes( "hd" );
    AG.loadToColors( "hd" );
    AG.updateAvatar();

    /*
     * Navigation Triggers
     *
     */

    $( "select" ).change(function() {
        var gender = $( this ).data( 'gender' );

        if( gender == AG.getGender() )
            return;

        var oldGender = ( gender == "M" ) ? "F" : "M";

        $( 'option[data-gender="' + oldGender + '"]' ).removeClass( 'nav-selected' );
        $( this ).addClass( 'nav-selected' );

        AG.switchGender();
        AG.loadToClothes( AG.getCurrentSet() );
        AG.updateAvatar();

        return false;
    });

    $( 'a[data-navigate]' ).on( 'click', function()
    {
        var toSet = $( this ).data( 'navigate' );
        var subnav = $( this ).data( 'subnav' );

        $( '.nav-selected' ).removeClass( 'nav-selected' );
        $( this ).addClass( 'nav-selected' );

        AG.setCurrentSet( toSet );
        AG.loadToClothes( toSet );
        AG.loadToColors( toSet );

        if( typeof subnav !== 'undefined' ) {
            $( '.sub-navigation .display' ).removeClass( 'display' ).addClass( 'hidden' );
            $( '#' + subnav ).removeClass( 'hidden' ).addClass( 'display' );
        }

        return false;
    });


    /*
     * Item clicking triggers
     *
     */

    $( '#avatarSelector' ).on( 'click', 'a[data-clothing]', function()
    {
        var current = AG.getPart( AG.getCurrentSet() );
        var color = ( typeof current.color === "undefined" || current.color == "" ) ? "61" : current.color;

        $( '.selected' ).removeClass( 'selected' );
        $( this ).addClass( 'selected' );

        AG.setPart( AG.getCurrentSet(), color, $( this ).data( 'clothing' ) );
        AG.updateAvatar();

        return false;
    });

    $( '#avatarSelector' ).on( 'click', 'a[data-color]', function()
    {
        var current = AG.getPart( AG.getCurrentSet() );
        var paletteid = $( this ).attr( 'data-palette' );
        var hex = $( this ).attr( 'data-color' );

        AG.setPart( AG.getCurrentSet(), AG.filterByHex( paletteid, hex ), current.set );
        AG.updateAvatar();

        return false;
    });

    $( '#avatarSelector' ).on( 'click', 'a[data-remove="true"]', function()
    {
        $( '.selected' ).removeClass( 'selected' );
        $( this ).addClass( 'selected' );

        AG.unsetPart( AG.getCurrentSet() );
        AG.updateAvatar();

        return false;
    });

    /*
     * To create a default character you should use
     * AG.importFigure( "LOOK-FROM-DATABASE" )
     *
     * This includes the figure - you should set
     * the default figure if you are planning to
     * use this in a CMS so that the user can
     * change from their last save.
     *
     */

    function AvatarGenerate()
    {


        /*
         * This object controls what the
         * display for the habbo is.
         *
         * @type    object
         */

        var habbo    = {
            hr: { color: '61', set: '831' },
            hd: { color: '2', set: '3092' },
            ch: { color: '110-1408', set: '3438' },
            lg: { color: '110', set: '3058' },
            sh: { color: '1408', set: '3089' },
            ha: { color: '', set: '' },
            he: { color: '', set: '' },
            ea: { color: '', set: '' },
            fa: { color: '', set: '' },
            ca: { color: '110', set: '3219' },
            wa: { color: '0', set: '2001' },
            cc: { color: '', set: '' },
            cp: { color: '', set: '' }
        };


        /*
         * This object controls what the
         * display for the habbo is.
         *
         * @type    object
         */

        var habboFemale    = {
            hr: { color: '33', set: '515' },
            hd: { color: '1', set: '600' },
            ch: { color: '70', set: '635' },
            lg: { color: '66-62', set: '716' },
            sh: { color: '68', set: '735' },
            ha: { color: '', set: '' },
            he: { color: '', set: '' },
            ea: { color: '', set: '' },
            fa: { color: '', set: '' },
            ca: { color: '', set: '' },
            wa: { color: '', set: '' },
            cc: { color: '', set: '' },
            cp: { color: '', set: '' }
        };


        this.getHabbo = function()
        {
            return habbo;
        };


        /*
         * Gender default should be M.
         */

        this.gender = 'M';


        /*
         * Get the current gender
         *
         * @return  string
         *
         */

        this.getGender = function()
        {
            return this.gender;
        };


        /*
         * Switch the gender, so if the user
         * is currently male, switch him/her
         * to female.
         *
         */

        this.switchGender = function()
        {
            this.gender = ( this.gender !== 'M' && this.gender !== 'F' || this.gender == 'F' ) ? 'M' : 'F';
        };


        /*
         * Set a specific part for the Habbo variable.
         *
         * @param   part
         * @param   color
         * @param   set
         */

        this.setPart = function( part, color, set )
        {
            if( this.getGender() == "M" )
            {
                habbo[ part ] = { color: color, set: set };
            }
            else
            {
                habboFemale[ part ] = { color: color, set: set };
            }
        };


        /*
         * Unset a specific part for the Habbo variable.
         *
         * @param   part
         *
         */

        this.unsetPart = function( part )
        {
            if( this.getGender() == "M" )
            {
                habbo[ part ] = { set: '' };
            }
            else
            {
                habboFemale[ part ] = { set: '' };
            }
        };


        /*
         * Get a specific part of the Habbo variable.
         *
         * @param   part
         */

        this.getPart = function( part )
        {
            if( this.getGender() == "M" )
            {
                return habbo[ part ];
            }
            else
            {
                return habboFemale[ part ];
            }
        };


        /*
         * This is used to determine the current set
         * that the user is looking through.
         *
         * @type    string
         */

        var currentSet = "hd";


        /*
         * Get the current set that the user is looking
         * through.
         *
         * @return  string
         */

        this.getCurrentSet = function()
        {
            return currentSet;
        };


        /*
         * Set the current set that the user is looking
         * through.
         *
         * @param   current string
         */

        this.setCurrentSet = function( current )
        {
            currentSet = current;
        };


        /*
         * This figure data will be provided by the PHP
         * script that accompanies this - it generates
         * two files: palettes.json and settypes.json
         *
         * @type    object
         */

        var figuredata = { palettes: {}, sets: {} };


        /*
         * Return all of the palettes.
         *
         * @return  object
         */

        this.getPalettes = function()
        {
            return figuredata.palettes;
        };


        /*
         * Return a palette by ID.
         *
         * @return object
         */

        this.getPalette = function( id )
        {
            return figuredata.palettes[ id ];
        };


        /*
         * Use this function to hand the palettes.json
         * created by the PHP script that accompanies
         * the javascript file.
         *
         */

        this.setPalettes = function( json )
        {
            figuredata.palettes = json;
        };


        /*
         * Use this function to hand the settypes.json
         * created by the PHP script that accompanies
         * the javascript file.
         *
         */

        this.setTypes = function( json )
        {
            figuredata.sets = json;
        };


        /*
         * Build the figure from the habbo variable
         * and then compile a string that will be then
         * sent to the Habbo imager.
         *
         */

        this.buildFigure = function( usingHabbo )
        {
            var figure = "";

            jQuery.each( ( this.getGender() == "M" ) ? habbo : habboFemale, function( index, value)
            {
                if( value.set == "" || value.color == "" )
                    return;

                figure = figure + "." + index + "-" + value.set + "-" + value.color;
            });

            return figure.substring(1, figure.length );
        };


        /*
         * Import a figure from a string (especially
         * useful if you would like to replace the default
         * figure or if you wish to import your logged in users
         * figure).
         *
         */

        this.importFigure = function( figure )
        {
            var arrayFigure = figure.split( "." );

            jQuery.each( arrayFigure, function( index, value )
            {
                var array = value.split( '-' );

                habbo[ array[0] ].set   = array[1];
                habbo[ array[0] ].color = ( 3 in array ) ? array[2] + "-" + array[3] : array[2];
            });

        };


        /*
         * This method is used to return an object
         * with all clothes related to that set
         * type.
         *
         * @return  object|false
         */

        this.filterByType = function( type )
        {
            var hit;

            jQuery.each( figuredata.sets, function( index, value )
            {
                if( value.type == type )
                {
                    hit = value;

                    return false;
                }
            });

            return hit;
        };


        /*
         * This method is used to return an object
         * with that matches a certain hex code.
         *
         * @param   int
         * @param   string
         *
         * @return  object|false
         */

        this.filterByHex = function( paletteid, hex )
        {
            var hit;

            jQuery.each( figuredata.palettes[ paletteid ], function( index, value )
            {
                if( value.hex == hex )
                {
                    hit = index;

                    return false;
                }
            });

            return hit;
        };


        /*
         * This checks whether or not the user can
         * remove the item.
         *
         * @param   string
         *
         * @return  boolean
         *
         */

        this.canRemove = function( type )
        {
            if( type == "hd" || type == "lg" )
            {
                return false;
            }

            return true;
        };


        /*
         * Load the clothing elements to a single
         * element. This should ideally be a div.
         *
         * @param   type    string
         */

        this.loadToClothes = function( type )
        {
            var _this = this;
            var load   = this.filterByType( type );

            $( clothesObject ).html( "" );

            if( this.canRemove( type ) )
            {
                var remove = $( '<a href="#" class="clothes-object removable" data-remove="true"></a>');
                var isRemoved = this.getPart( type );

                if( typeof isRemoved.set == "undefined" || isRemoved.set == "" )
                {
                    remove.addClass( 'selected' );
                }

                $( clothesObject ).append( remove );
            }

            jQuery.each( load.sets, function( index, value )
            {
                if( value.gender == _this.gender && value.selectable == 1 || value.gender == "U" && value.selectable == 1 )
                {
                    var currentlySelected = _this.getPart( type );
                    var partString = type + "-" + index + "-" + currentlySelected.color;

                    var asset  = $('<a class="clothes-object ' + type + '" data-clothing="' + index + '" href="#"></a>');

                    if( index == currentlySelected.set )
                    {
                        asset.addClass( 'selected' );
                    }

                    asset.css( 'background-image', 'url(https://habbo.nl/habbo-imaging/avatarimage?figure=' + partString + '&gender=' + _this.gender + ' )' );

                    $( clothesObject ).append( asset );
                }
            });
        };


        /*
         *
         */

        this.loadToColors = function( type )
        {
            var _this = this;

            var load   = this.filterByType( type );
            var colors = this.getPalette( load.paletteid );

            $( colorsObject ).html( "" );

            jQuery.each( colors, function( index, value )
            {
                if( value.selectable == 1 )
                {
                    var color = $( '<a href="#" class="color-object" style="background:#' + value.hex + '" data-palette="' + load.paletteid + '" data-color="' + value.hex + '"></a>');

                    $( colorsObject ).append( color );
                }
            });

        };


        /*
         * jQuery plugin: this allows us to easily
         * attach an element to AvatarGenerate.
         *
         * @type    element
         */

        var clothesObject;


        /*
         * jQuery plugin: this is the function that
         * actually sets the clothesObject variable
         * so that we may reference it later.
         *
         * @param   object
         */

        this.setClothesObject = function( object ) {
            clothesObject = object;
        };


        /*
         * jQuery plugin: this allows us to easily
         * attach an element to AvatarGenerate.
         *
         * @type    element
         */

        var colorsObject;


        /*
         * jQuery plugin: this is the function that
         * actually sets the clothesObject variable
         * so that we may reference it later.
         *
         * @param   object
         */

        this.setColorsObject = function( object )
        {
            colorsObject = object;
        };


        /*
         * jQuery plugin: this allows us to easily
         * attach an element to AvatarGenerate.
         *
         * @type    element
         */

        var codeObject;


        /*
         * jQuery plugin: this is the function that
         * actually sets the codeObject variable
         * so that we may reference it later.
         *
         * @param   object
         */

        this.setCodeObject = function( object )
        {
            codeObject = object;
        };

        this.updateAvatar = function()
        {
            var URL = "https://www.habbo.com.tr/habbo-imaging/avatarimage?head_direction=4&direction=4&size=l&figure=" + this.buildFigure() + "&gender=" + this.getGender();

            $( '#myHabbo' ).attr( 'src', URL );
            $( codeObject ).val( this.buildFigure());
        };


    }

}( jQuery ));