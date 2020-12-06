import {MigrationInterface, QueryRunner} from "typeorm";

export class FakeData1607223198480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      insert into catalog (title, issn, period, cn) values ('Atriplex hortensis L.', '0300-8484', '半月刊', '29-0120/XM');
insert into catalog (title, issn, period, cn) values ('Eriogonum fasciculatum Benth. var. polifolium (Benth.) Torr. & A. Gray', '9638-1758', '半年刊', '00-4543/RS');
insert into catalog (title, issn, period, cn) values ('Yermo xanthocephalus Dorn', '8306-8831', '周刊', '64-1956/PO');
insert into catalog (title, issn, period, cn) values ('Maianthemum racemosum (L.) Link ssp. amplexicaule (Nutt.) LaFrankie', '3303-8826', '周刊', '76-8395/OT');
insert into catalog (title, issn, period, cn) values ('Papaver macounii Greene ssp. macounii', '5321-4545', '半年刊', '31-2390/JG');
insert into catalog (title, issn, period, cn) values ('Heuchera maxima Greene', '4020-0622', '月刊', '20-4526/TS');
insert into catalog (title, issn, period, cn) values ('Neisosperma Raf.', '2229-7415', '月刊', '31-0474/NH');
insert into catalog (title, issn, period, cn) values ('Streptanthus bracteatus A. Gray', '6010-4625', '双月刊', '74-7449/EF');
insert into catalog (title, issn, period, cn) values ('Heterodermia appalachensis (Kurok.) W.L. Culb.', '4000-8745', '月刊', '88-1563/ES');
insert into catalog (title, issn, period, cn) values ('Trepocarpus aethusae Nutt. ex DC.', '0982-4627', '半月刊', '02-5131/CI');
insert into catalog (title, issn, period, cn) values ('Clermontia samuelii Forbes ssp. hanaensis (H. St. John) Lammers', '3346-5874', '半月刊', '51-4557/GM');
insert into catalog (title, issn, period, cn) values ('Cyrtandra macraei A. Gray', '4323-1191', '半月刊', '10-7668/HY');
insert into catalog (title, issn, period, cn) values ('Achnatherum nelsonii (Scribn.) Barkworth ssp. dorei (Barkworth & Maze) Barkworth', '3882-5798', '半月刊', '73-9656/EP');
insert into catalog (title, issn, period, cn) values ('Penstemon heterophyllus Lindl. ssp. purdyi D.D. Keck', '2679-5262', '双月刊', '92-3544/NU');
insert into catalog (title, issn, period, cn) values ('Picramnia pentandra Sw.', '6871-8990', '双月刊', '55-7977/FW');
insert into catalog (title, issn, period, cn) values ('Ruellia corzoi Tharp & F.A. Barkley', '0994-7255', '半年刊', '48-9859/OS');
insert into catalog (title, issn, period, cn) values ('Cuscuta dentatasquamata Yunck.', '8429-2246', '双月刊', '41-6522/AO');
insert into catalog (title, issn, period, cn) values ('Metroxylon amicarum (H.A. Wendl.) Becc.', '8912-0595', '双月刊', '36-9201/WL');
insert into catalog (title, issn, period, cn) values ('Cirsium murdockii (S.L. Welsh) Cronquist', '4029-2841', '半年刊', '79-9047/NZ');
insert into catalog (title, issn, period, cn) values ('Mammea africana Sabine', '0904-1367', '双月刊', '27-4076/AT');
insert into catalog (title, issn, period, cn) values ('Dulichium arundinaceum (L.) Britton var. arundinaceum', '3834-3655', '半月刊', '51-1010/CN');
insert into catalog (title, issn, period, cn) values ('Arthonia vernans Willey', '4666-4832', '年刊', '85-4846/LV');
insert into catalog (title, issn, period, cn) values ('Ligularia dentata (A. Gray) H. Hara', '2230-9776', '半月刊', '94-6167/ID');
insert into catalog (title, issn, period, cn) values ('Filipendula ulmaria (L.) Maxim. ssp. denudata (J. Presl & C. Presl) Hayek', '5241-2247', '年刊', '07-3856/GN');
insert into catalog (title, issn, period, cn) values ('Samadera indica Gaertn.', '1045-2440', '双月刊', '56-9315/IO');
insert into catalog (title, issn, period, cn) values ('Gilia cana (M.E. Jones) A. Heller ssp. cana', '0317-8426', '月刊', '96-1696/EH');
insert into catalog (title, issn, period, cn) values ('Leptochloa nealleyi Vasey', '7203-0204', '半月刊', '28-0537/HS');
insert into catalog (title, issn, period, cn) values ('Epilobium obcordatum A. Gray', '8825-6068', '年刊', '01-4946/QI');
insert into catalog (title, issn, period, cn) values ('Rudbeckia fulgida Aiton', '5103-1237', '周刊', '53-3280/PW');
insert into catalog (title, issn, period, cn) values ('Phanopyrum gymnocarpon (Elliott) Nash', '3045-1063', '周刊', '55-6203/QV');
insert into catalog (title, issn, period, cn) values ('Pottia bryoides (Dicks.) Mitt.', '6630-1213', '半年刊', '66-3315/VS');
insert into catalog (title, issn, period, cn) values ('Saxifraga tricuspidata Rottb.', '8579-9361', '月刊', '61-2520/LB');
insert into catalog (title, issn, period, cn) values ('Pertusaria excludens Nyl.', '9124-1198', '半月刊', '35-2956/TG');
insert into catalog (title, issn, period, cn) values ('Gomphrena martiana Gillies ex Moq.', '2366-9272', '半年刊', '88-6988/CJ');
insert into catalog (title, issn, period, cn) values ('Bacidia polychroa (Th. Fr.) Körb.', '0783-7238', '月刊', '80-5559/NR');
insert into catalog (title, issn, period, cn) values ('Scleria biflora Roxb.', '1978-7583', '年刊', '26-8719/ST');
insert into catalog (title, issn, period, cn) values ('Matelea pubiflora (Decne.) Woodson', '2911-4614', '半月刊', '44-7228/OT');
insert into catalog (title, issn, period, cn) values ('Lomatium engelmannii Mathias', '1493-7166', '双月刊', '65-0345/UT');
insert into catalog (title, issn, period, cn) values ('Fendlera rigida I.M. Johnst.', '4729-0307', '月刊', '35-0956/FQ');
insert into catalog (title, issn, period, cn) values ('Enceliopsis nudicaulis (A. Gray) A. Nelson', '7738-5088', '双月刊', '81-4365/RJ');
insert into catalog (title, issn, period, cn) values ('Purshia ×subintegra (Kearney) Henrickson', '5561-1733', '半月刊', '15-2631/VN');
insert into catalog (title, issn, period, cn) values ('Pseudognaphalium sandwicensium (Gaudich.) Anderb.', '2435-4999', '双月刊', '99-1569/NE');
insert into catalog (title, issn, period, cn) values ('Nonea versicolor (Stev.) Sweet', '6719-1450', '半年刊', '00-3366/GU');
insert into catalog (title, issn, period, cn) values ('Sphagnum schofieldii H.A. Crum', '6478-7951', '半月刊', '65-2400/XI');
insert into catalog (title, issn, period, cn) values ('Dudleya cymosa (Lem.) Britton & Rose ssp. marcescens Moran', '3117-1948', '半月刊', '28-6973/TI');
insert into catalog (title, issn, period, cn) values ('Phalaris brachystachys Link', '7038-2549', '周刊', '08-2303/CM');
insert into catalog (title, issn, period, cn) values ('Rosa micrantha Borrer ex Sm.', '8476-1298', '半年刊', '20-2428/FQ');
insert into catalog (title, issn, period, cn) values ('Valeriana dioica L. var. sylvatica S. Watson', '6615-6795', '月刊', '14-6820/VE');
insert into catalog (title, issn, period, cn) values ('Verrucaria papillosa Ach.', '7174-8128', '半年刊', '64-5417/XH');
insert into catalog (title, issn, period, cn) values ('Dorstenia L.', '4556-7715', '半月刊', '34-2167/TM');
insert into catalog (title, issn, period, cn) values ('Eriogonum apricum J.T. Howell', '6722-9099', '周刊', '11-9691/CG');
insert into catalog (title, issn, period, cn) values ('Xylorhiza glabriuscula Nutt. var. glabriuscula', '2401-2874', '双月刊', '56-0468/CF');
insert into catalog (title, issn, period, cn) values ('Schistidium rivulare (Brid.) Podp. var. rivulare', '8651-4950', '双月刊', '60-3594/WM');
insert into catalog (title, issn, period, cn) values ('Eriogonum parvifolium Sm.', '4768-4865', '周刊', '62-7564/EP');
insert into catalog (title, issn, period, cn) values ('Aspalathus L.', '8190-5739', '年刊', '98-7551/BO');
insert into catalog (title, issn, period, cn) values ('Leycesteria formosa Wall.', '9055-7882', '月刊', '50-6941/FL');
insert into catalog (title, issn, period, cn) values ('Calamagrostis bolanderi Thurb.', '7967-8881', '周刊', '44-7250/WZ');
insert into catalog (title, issn, period, cn) values ('Townsendia parryi D.C. Eaton', '0295-4025', '周刊', '07-5343/OC');
insert into catalog (title, issn, period, cn) values ('Sporobolus indicus (L.) R. Br. var. capensis Engelm.', '2749-2003', '双月刊', '54-2638/UN');
insert into catalog (title, issn, period, cn) values ('Plagiobothrys pringlei Greene', '3962-2838', '年刊', '52-3303/SF');
insert into catalog (title, issn, period, cn) values ('Carex chihuahuensis Mack.', '9850-9210', '年刊', '95-1934/AR');
insert into catalog (title, issn, period, cn) values ('Pyrrhopappus DC.', '9755-6615', '半月刊', '09-3582/SA');
insert into catalog (title, issn, period, cn) values ('Thelypteris yaucoensis Proctor', '1193-9295', '半年刊', '71-1107/UR');
insert into catalog (title, issn, period, cn) values ('Ornithogalum nutans L.', '4656-5885', '周刊', '36-4367/HP');
insert into catalog (title, issn, period, cn) values ('Bidens alba (L.) DC. var. radiata (Sch. Bip.) Ballard ex T.E. Melchert', '7009-7232', '月刊', '89-5897/GC');
insert into catalog (title, issn, period, cn) values ('Licaria Aubl.', '4362-0025', '月刊', '19-0079/KG');
insert into catalog (title, issn, period, cn) values ('Athysanus pusillus (Hook.) Greene', '8053-9428', '半年刊', '97-9811/CD');
insert into catalog (title, issn, period, cn) values ('Euphrasia frigida Pugsley', '2058-0156', '周刊', '66-2455/IC');
insert into catalog (title, issn, period, cn) values ('Carex purpurifera Mack.', '0894-7217', '双月刊', '27-5078/EG');
insert into catalog (title, issn, period, cn) values ('Canarium pimela Konig', '4664-9623', '双月刊', '18-2606/HM');
insert into catalog (title, issn, period, cn) values ('Abies lowiana (Gordon & Glend.) A. Murray bis', '5147-3228', '年刊', '27-3752/UA');
insert into catalog (title, issn, period, cn) values ('Cornus capitata Wall. ex Roxb.', '0007-1907', '周刊', '20-0024/MB');
insert into catalog (title, issn, period, cn) values ('Tortula papillosa Wilson', '0392-7719', '月刊', '21-1607/WP');
insert into catalog (title, issn, period, cn) values ('Schoenoplectus subterminalis (Torr.) Soják', '5481-4135', '半月刊', '16-9626/CZ');
insert into catalog (title, issn, period, cn) values ('Astragalus lonchocarpus Torr.', '1098-6696', '双月刊', '09-9066/CW');
insert into catalog (title, issn, period, cn) values ('Phlox ×procumbens Lehm. (pro sp.)', '9966-0300', '双月刊', '25-4772/HN');
insert into catalog (title, issn, period, cn) values ('Erigeron pulchellus Michx. var. brauniae Fernald', '1702-6500', '半月刊', '11-2356/XY');
insert into catalog (title, issn, period, cn) values ('Fouquieria Kunth', '8396-0482', '周刊', '64-0697/CZ');
insert into catalog (title, issn, period, cn) values ('Cryptantha crassisepala (Torr. & A. Gray) Greene var. crassisepala', '5694-7088', '半月刊', '85-4250/OZ');
insert into catalog (title, issn, period, cn) values ('Astragalus nevinii A. Gray', '0838-2467', '双月刊', '38-2649/KG');
insert into catalog (title, issn, period, cn) values ('Hymenoxys richardsonii (Hook.) Cockerell var. richardsonii', '2274-8740', '双月刊', '79-9050/WA');
insert into catalog (title, issn, period, cn) values ('Astragalus jejunus S. Watson var. articulatus Dorn', '4693-8542', '年刊', '49-3479/MW');
insert into catalog (title, issn, period, cn) values ('Sorghum bicolor (L.) Moench ssp. drummondii (Nees ex Steud.) de Wet & Harlan', '8825-5708', '双月刊', '79-3276/EO');
insert into catalog (title, issn, period, cn) values ('Mangifera foetida Lour.', '8646-1379', '月刊', '42-5203/JA');
insert into catalog (title, issn, period, cn) values ('Trichostigma octandrum (L.) H. Walt.', '8166-2795', '半月刊', '97-9167/DP');
insert into catalog (title, issn, period, cn) values ('Symphyotrichum campestre (Nutt.) G.L. Nesom var. campestre', '0366-1717', '半月刊', '91-7952/TL');
insert into catalog (title, issn, period, cn) values ('Eriocaulon parkeri B.L. Rob.', '7216-1621', '半月刊', '44-9322/QS');
insert into catalog (title, issn, period, cn) values ('Salix candida Flueggé ex Willd.', '2213-9911', '半年刊', '96-7531/KD');
insert into catalog (title, issn, period, cn) values ('Rubus depavitus L.H. Bailey', '4852-4005', '周刊', '25-9286/CO');
insert into catalog (title, issn, period, cn) values ('Rosa pinetorum A. Heller, nom. inq.', '3065-4665', '双月刊', '64-1805/BU');
insert into catalog (title, issn, period, cn) values ('Leymus mollis (Trin.) Pilg. ssp. villosissimus (Scribn.) Á. Löve', '2111-3938', '月刊', '41-0960/KJ');
insert into catalog (title, issn, period, cn) values ('Oxalis illinoensis Schwegm.', '5338-3549', '月刊', '86-5010/MI');
insert into catalog (title, issn, period, cn) values ('Penstemon gracilis Nutt.', '3441-2463', '双月刊', '86-0936/PK');
insert into catalog (title, issn, period, cn) values ('Psilocarphus brevissimus Nutt. var. brevissimus', '2082-5959', '周刊', '41-9691/SI');
insert into catalog (title, issn, period, cn) values ('Libertia formosa Graham', '4020-5432', '双月刊', '98-6006/HO');
insert into catalog (title, issn, period, cn) values ('Fulgensia fulgens (Sw.) Elenkin', '8787-9574', '周刊', '66-2668/MD');
insert into catalog (title, issn, period, cn) values ('Kniphofia Moench', '6015-5807', '半月刊', '88-7139/VD');
insert into catalog (title, issn, period, cn) values ('Ochrolechia subplicans (Nyl.) Brodo ssp. hultenii (Erichsen) Brodo', '8321-2463', '半年刊', '59-9422/ZJ');
insert into catalog (title, issn, period, cn) values ('Psychotria hexandra H. Mann ssp. oahuensis O. Deg. & Fosberg var. oahuensis', '6019-8266', '周刊', '74-3729/TW');
insert into catalog (title, issn, period, cn) values ('Potamogeton ×cognatus Asch. & Graebn.', '1000-6149', '双月刊', '36-6385/VC');

      
      `)
    }

    public async down(queryRunner : QueryRunner): Promise<void> {
      queryRunner.query(``);
    }

}
