import {MigrationInterface, QueryRunner} from "typeorm";

export class FakeData1607838861905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Erigeron asper Nutt.', '8891-284X', '30-9667/Dg', '月刊', 'Kyshtym', 'Npath');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Phleum arenarium L.', '7057-495X', '40-4311', '月刊', 'Etten-Leur', 'Youspan');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Draba lonchocarpa Rydb. var. lonchocarpa', '5072-154X', '05-1034/lL', '月刊', 'Paranaguá', 'Topiczoom');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Panicum makarikariense (Gooss.) Van Rensb.', '6731-4967', '65-8156', '半年刊', 'Kafir Yasif', 'Gabvine');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Clibadium erosum (Sw.) DC.', '0565-138x', '53-1777', '月刊', 'Tinampo', 'Rhyloo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Chenopodium quinoa Willd.', '4353-940x', '72-4817', '月刊', 'Acajutla', 'Viva');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Solidago uliginosa Nutt. var. terrae-novae (Torr. & A. Gray) Fernald', '0382-151x', '03-0833/mR', '月刊', 'Huqiu', 'Dabtype');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Hylocomium splendens (Hedw.) Schimp.', '2477-3464', '14-5518', '周刊', 'Milove', 'Mydeo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Fissidens kochii H.A. Crum & L.E. Anderson', '0063-673X', '85-2843/Fl', '月刊', 'Sumberan', 'Tagfeed');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Amaranthus pumilus Raf.', '0563-6501', '28-0187', '月刊', 'Tanjung Raja', 'Flashpoint');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Thymophylla pentachaeta (DC.) Small var. puberula (Rydb.) Strother', '0353-187x', '37-5292', '年刊', 'Slobodnica', 'Zooveo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Isoetes hyemalis D.F. Brunton', '2380-109X', '53-4932', '半年刊', 'Huayllati', 'Skimia');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Viola praemorsa Douglas ex Lindl. ssp. flavovirens (Pollard) Fabijan', '2717-785x', '31-8400', '月刊', 'Roi Et', 'Zooxo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Pseudosasa japonica (Siebold & Zucc. ex Steud.) Makino ex Nakai', '9638-026x', '36-9927/LK', '年刊', 'Las Palmas', 'Jaxbean');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Fritillaria atropurpurea Nutt.', '3135-8403', '47-5239/vn', '月刊', 'Independencia', 'Eazzy');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Koeberlinia Zucc.', '9789-653x', '29-6333/YR', '半年刊', 'Longsheng', 'Mybuzz');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Vitis ×champinii Planch. (pro sp.)', '9652-0193', '27-4045/IU', '月刊', 'Babakan', 'Flashset');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Elsholtzia ciliata (Thunb.) Hyl.', '7916-506X', '79-2937/sk', '月刊', 'Springfield', 'Aivee');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Crotalaria pallida Aiton var. obovata (G. Don) Polhill', '1622-7927', '66-0051', '月刊', 'Oni', 'Linkbuzz');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Spiranthes magnicamporum Sheviak', '5874-610x', '82-5724', '年刊', 'Miyazaki-shi', 'Bluejam');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Lupinus havardii S. Watson', '2038-963x', '06-9674/cp', '月刊', 'Linggamanik', 'Youtags');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Umbilicaria havaasii Llano', '2198-336X', '71-8702/Ui', '周刊', 'Naro-Fominsk', 'Jaxworks');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Buellia maritima (A. Massal.) Bagl.', '7750-887X', '77-7721', '月刊', 'Kastsyukowka', 'JumpXS');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Calystegia subacaulis Hook. & Arn. ssp. subacaulis', '7280-142X', '44-0271/Zj', '月刊', 'Okanagan', 'Dazzlesphere');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Hypericum diosmoides Griseb.', '1497-933X', '92-3577', '半年刊', 'Jiangyan', 'Gabvine');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Prinsepia sinensis (Oliv.) Oliv. ex Bean', '7517-666x', '77-6327', '半月刊', 'Vantaa', 'Skyble');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Scrophularia marilandica L.', '2869-261X', '52-5470/JS', '半月刊', 'Jiangjiazui', 'Jaxworks');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Polygonum scandens L.', '7891-265X', '32-8298/qK', '半月刊', 'Huangpu', 'Brainbox');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Carex richardsonii R. Br.', '4057-740X', '04-1305/jK', '月刊', 'Sumberejo', 'Kayveo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Commelina coelestis Willd.', '7091-0935', '51-3788/vW', '月刊', 'Thessalon', 'Jabberstorm');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Penstemon longiflorus (Pennell) S.L. Clark', '1289-658X', '78-8880/lg', '月刊', 'Pau', 'Mita');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Quercus sinuata Walter', '0403-765X', '97-3487/Kp', '月刊', 'San Pa Tong', 'Topicblab');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Selaginella wallacei Hieron.', '7307-754x', '73-0230/sD', '月刊', 'Magisterial', 'Twitterbridge');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Eleocharis tricostata Torr.', '4656-120X', '35-8059/qw', '月刊', 'Iecava', 'Buzzbean');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Platanthera lacera (Michx.) G. Don', '5346-199X', '43-9221/rs', '月刊', 'Ferraria', 'Flashdog');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Orthocarpus barbatus Cotton', '3392-276X', '31-8386/qH', '月刊', 'Leipsoí', 'Youspan');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Crepis occidentalis Nutt. ssp. costata (A. Gray) Babc. & Stebbins', '5060-340x', '42-9557/Cl', '月刊', 'Yuhe', 'Kwilith');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Sideroxylon salicifolium (L.) Lam.', '7656-5621', '29-2318', '月刊', 'Hexia', 'Yozio');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Zornia reticulata Sm.', '2622-2000', '60-6099', '年刊', 'Rtishchevo', 'Skipstorm');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Quercus ×diversiloba Tharp ex A. Camus', '7057-810X', '92-0231/bK', '月刊', 'Fuxing', 'Wordpedia');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Peucedanum ostruthium (L.) W.D.J. Koch', '6921-093X', '09-0678', '年刊', 'Damiao', 'Podcat');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Tetragonotheca repanda (Buckley) Small', '8473-773x', '50-6378/Bi', '年刊', 'Zvole', 'Gabtune');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Buellia smaragdula de Lesd.', '8632-221X', '59-9067', '月刊', 'Usulután', 'Topicshots');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Claopodium bolanderi Best', '8440-5477', '62-4378/KG', '月刊', 'Eschweiler', 'Camimbo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rhynchospora marliniana Naczi, W.M.Knapp & W.W.Thomas', '8050-938X', '31-4780', '月刊', 'Izhmorskiy', 'Eimbee');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Phacopsis Tul.', '4237-4364', '67-9614', '半年刊', 'Jarānwāla', 'Eare');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Physcomitrium immersum Sull.', '4774-184X', '46-2343/UG', '周刊', 'Staroyur’yevo', 'Wikizz');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Senecio flaccidus Less. var. monoensis (Greene) B.L. Turner & T.M. Barkley', '4579-767X', '57-0453', '年刊', 'Sukamaju', 'Gigashots');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Arisaema triphyllum (L.) Schott ssp. quinatum (Buckley) Huttleston', '0157-3521', '27-9856', '月刊', 'Orneta', 'Blogtag');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Lupinus longifolius (S. Watson) Abrams', '1593-346X', '23-5584/Fi', '年刊', 'Tagoloan', 'Browseblab');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Campylostelium saxicola (F. Weber & D. Mohr) Bruch & Schimp.', '9640-0877', '29-2778/sU', '月刊', 'Piura', 'Eadel');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Mentzelia argillosa J. Darl.', '3805-630X', '13-0942/og', '年刊', 'Barra do Garças', 'Gabspot');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Sagraea scabrosa (L.) Alain', '2769-046X', '19-5127/oA', '年刊', 'Shagonar', 'Flipstorm');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Honckenya peploides (L.) Ehrh. ssp. major (Hook.) Hultén', '9618-3964', '88-3309', '年刊', 'Aráchova', 'Latz');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Phyllostegia grandiflora (Gaudich.) Benth.', '8516-945X', '93-1467/Vh', '半年刊', 'Santa Lucia', 'Pixope');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Monardella macrantha A. Gray ssp. macrantha', '7197-932X', '49-8683/Ib', '年刊', 'Anren Chengguanzhen', 'Meembee');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rumex scutatus L.', '1964-2756', '98-0502', '半月刊', 'Roi Et', 'Kwideo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Amblyopappus pusillus Hook. & Arn.', '5699-220X', '19-8720/TI', '月刊', 'Taivalkoski', 'Flashspan');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rimularia gyrizans (Nyl.) Hertel & Rambold', '6911-632X', '77-6865', '半月刊', 'Muslyumovo', 'Rooxo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Lomatium caruifolium (Hook. & Arn.) J.M. Coult. & Rose var. denticulatum (Jeps.) Jeps.', '4624-711x', '50-8181', '月刊', 'Serov', 'Devify');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Ruellia pedunculata Torr. ex A. Gray ssp. pinetorum (Fernald) R.W. Long', '6206-1550', '50-4746/hi', '月刊', 'Rabat', 'Linkbridge');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Triadica Loureiro', '6865-477X', '64-9846', '月刊', 'Marco', 'Mymm');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Juncus brevicaudatus (Engelm.) Fernald', '5724-596x', '19-8193/vj', '月刊', 'Tayirove', 'Plambee');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Matelea borinquensis Alain', '9009-968x', '45-2257/rU', '月刊', 'Głuchów', 'Skippad');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Wilkesia gymnoxiphium A. Gray', '4179-398X', '03-0135', '年刊', 'Micheng', 'Leenti');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Buxbaumia aphylla Hedw.', '7892-326X', '66-7090/CJ', '半月刊', 'Sumberagung', 'Centimia');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Galium orizabense Hemsl. ssp. laevicaule (Weath. & S.F. Blake) Dempster', '2868-154x', '98-7742', '年刊', 'Tlogotunggal', 'Thoughtworks');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Trichomanes capillaceum L.', '1936-360X', '11-3367/dj', '月刊', 'Koani Ndogo', 'Wikibox');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Linum lewisii Pursh', '2753-662x', '62-2759/sN', '月刊', 'Parenggan', 'Fliptune');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rhabdoweisia crenulata (Mitt.) Jameson', '9481-185X', '16-1418', '月刊', 'Cienfuegos', 'Blogpad');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Echinocactus horizonthalonius Lem. var. horizonthalonius', '4922-044X', '50-5420/gx', '年刊', 'Suyang', 'Fliptune');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Pediocactus Britton & Rose', '8509-747x', '49-8823', '周刊', 'Tam Bình', 'Devpoint');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Carex atherodes Spreng.', '2654-352X', '96-7509', '半月刊', 'Mabini', 'Yamia');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Lyonothamnus A. Gray', '6353-005X', '95-6728', '年刊', 'Jinotega', 'Voolith');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Bromus pseudolaevipes Wagnon', '7252-595X', '69-5156', '月刊', 'Kandangsapi', 'Abatz');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Coreopsis palustris Sorrie', '1596-872X', '01-6548', '年刊', 'Ash Shaykh Zuwayd', 'Feedspan');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Berlandiera betonicifolia (Hook.) Small', '0581-993X', '64-1045', '月刊', 'Zhoujiang', 'Flashdog');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rinodina excrescens Vain.', '5872-935X', '59-7791', '月刊', 'Libas', 'Eidel');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Pinus ×murraybanksiana Righter & Stockw.', '8765-179X', '71-9144', '月刊', 'Markala', 'Oloo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Hastingsia bracteosa S. Watson', '1330-091x', '09-2292', '周刊', 'Ḩajjah', 'Talane');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Bidens hawaiensis A. Gray', '8275-427X', '40-6380/Ur', '年刊', 'El Parco District', 'Tambee');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Croton parksii Croizat', '8303-9623', '66-3084', '周刊', 'Slavs’ke', 'Vinte');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Dicentra cucullaria (L.) Bernh.', '1920-826X', '21-6597/QO', '半月刊', 'Orahovac', 'Flashset');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Pseudocyphellaria rainierensis Imshaug', '2075-691x', '38-3493/qA', '半年刊', 'Baoshan', 'Topicshots');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Lupinus densiflorus Benth. var. palustris (Kellogg) C.P. Sm.', '6332-740X', '44-5889', '年刊', 'Xiaochuan', 'Gevee');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Tripleurospermum perforatum (Mérat) M. Lainz', '7147-5211', '26-4799/rN', '月刊', 'Tokonou', 'Ntag');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Botrychium Sw.', '4877-2133', '11-4691/eE', '半年刊', 'Usulután', 'Jayo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Juglans regia L.', '1473-301X', '45-6778/Kz', '月刊', 'Tuofeng', 'Rooxo');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rubus probabilis L.H. Bailey', '5255-602X', '58-4916/yU', '年刊', 'Gweedore', 'Tagchat');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Verbascum phlomoides L.', '2694-691X', '69-0832/Eq', '月刊', 'Kamwenge', 'Kazu');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Malus mandshurica (Maxim.) Kom. var. sachalinensis (Juz.) Ponomar.', '9964-682x', '93-1998/iV', '半年刊', 'Bajo', 'Wikizz');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Ionactis stenomeres (A. Gray) Greene', '8040-790X', '68-9899', '半年刊', 'Krajan Dermawuharjo', 'Linkbridge');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rubus leucodermis Douglas ex Torr. & A. Gray var. bernardinus (Greene) Jeps.', '3471-801x', '39-7618', '月刊', 'Changping', 'Photobug');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Cuscuta coryli Engelm.', '1598-242x', '56-8754', '月刊', 'Makhalino', 'Photolist');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Eriophorum ×medium Andersson ssp. ×medium ', '7534-518x', '89-6113/yh', '半年刊', 'Lýkeio', 'Quimba');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Logfia minima (Sm.) Dumort.', '5389-5028', '99-5920/dI', '半年刊', 'Bongandanga', 'Photobug');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Tragia saxicola Small', '1406-129X', '73-4704/DX', '月刊', 'Knyszyn', 'Chatterbridge');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Penstemon strictiformis Rydb.', '3929-767X', '84-0299/YX', '月刊', 'Psyzh', 'Midel');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Rottboellia cochinchinensis (Lour.) W.D. Clayton', '9126-736X', '42-0308', '周刊', 'Babakankadu', 'Roodel');
insert into "journal" (title, issn, cn, period, pub_place, organizer) values ('Scleria eggersiana Boeckeler', '9102-590x', '12-4372/tc', '半年刊', 'Luxi', 'Feedbug');
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(``);
    }

}
