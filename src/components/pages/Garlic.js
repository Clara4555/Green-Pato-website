import React from 'react';
import '../../App.css';
import {GarlicType, GarlicSort} from '../GarlicItem';
import {assort, sorts} from '../../garlic';
import scheme1 from '../../images/garlic/scheme1.jpeg';
import scheme2 from '../../images/garlic/scheme2.jpeg';

export default function Garlic() {
    const Type = assort.map(item => 
        <GarlicType
            src={item.src}
            alt={item.alt}
            label={item.label}
            key={item.id}
            priceA={item.priceA}
            priceB={item.priceB}
            priceC={item.priceC}
            sizeA={item.sizeA}
            sizeB={item.sizeB}
            sizeC={item.sizeC}
            measurement={item.measurement}
        />
    );

    const firstSortDiv = sorts.slice(0, 4);
    const secondSortDiv = sorts.slice(4, 8);
    const SortFirst = firstSortDiv.map(i=> 
        <GarlicSort 
            src={i.src}
            alt={i.alt}
            label={i.label}
            key={i.id}
            item={i.item}
            text1={i.text1}
            text2={i.text2}
        />
    );
    const SortSecond = secondSortDiv.map(i => 
        <GarlicSort 
            src={i.src}
            alt={i.alt}
            label={i.label}
            key={i.id}
            item={i.item}
            text1={i.text1}
            text2={i.text2}
        />
    )

    return (
        <div className="garlic" id="garlic">
            <div className="garlic-header">
                <h1>озимый чеснок</h1>
            </div>

                <section className="content">
                    <h3>Описание культуры</h3>
                    <p>Чеснок (лат. Állium satívum) - многолетняя культура из семейства Амариллисовых. Вегетационный период соствляет от 85 дней у ранних сортов до 130 дней у поздних. <br/>
                    Различают яровой и озимый чеснок. Отличительной особенностью озимого чеснока является наличие цветоноса - так называемой "стрелки". После высыхания цветонос приобретает вид сухого стержня в центре головки. У ярового чеснока нет цветоноса, и количество зубков в среднем больше и они соответственно мельче.<br/> Во второй половине вегетационного периода на конце цветоноса у озимого чеснока появляется семенная коробочка, наполненная маленькими луковками - воздушными бульбочками. Воздушные бульбочки представляют собой вегетативные органы размножения чеснока, а не семена. Яровой чеснок размножается прикорневыми луковками.
                    </p>
                    <h3>Польза чеснока</h3>
                    <p>Чеснок знаменит своим острым вкусом и характерным ароматом. Благодаря своим свойствам чеснок входит в кухню многих стран мира. Полезные свойства чеснока связаны с содержанием в нем эфирного масла аллицина и других биологически активных веществ, которые, и придают ему специфический вкус и запах. Аллицин — мощный антиоксидант. Чеснок также обладает антивирусным, бактерицидным, фунгицидым действием, поддерживает микрофлору кишечника - его применяют для профилактики вирусных заболеваний и укрепления иммунитета в осенне-зимний период.</p>
                    <h3>Условия выращивания</h3>
                    <p>Чеснок, как овощная культура, успешно выращивается во всех регионах России, кроме Крайнего Севера. Чеснок относится к холодостойким культурам и выдерживает заморозки до -7℃. Для этой культуры выбирают высокое солнечное место. В затененных посадках чеснок вырастает мелким.<br/> 
                    Почва должна иметь нейтральную или слабощелочную реакцию. Кислотность почвы определяют агрохимическими тестом (продается в огородных магазинах - тест на кислотность почвы). В кислую почву перед посадкой вносят доломитовую муку 0,3-0,5 кг/кв.м в зависимости от кислотности почвы. <br/>
                    Чеснок не переносит застоя воды у корней, поэтому почва для посадки должна иметь хороший дренаж. Повышенная влажность вызывает развитие грибковых заболеваний у чеснока. 
                    <h3>Посадка</h3>
                    <p></p>
                    Озимый чеснок сажают осенью, так как ему для правильного развития требуется пройти фазу яровизации - длительного нахождения при температуре от +1℃ до +7℃. Для определения точных сроков посадки озимого чеснока нужно ориентироваться на погодные условия вашего региона. Посадку производят примерно за месяц до устойчивых заморозков, т.е., когда среднесуточная температура опускается до +10℃ и держится так в течение 10 дней. В средней полосе России это вторая половина октября. В северных регионах вторая половина сентября-начало октября. В южных - самый конец октября-середина ноября.<br/>
                    Яровой чеснок сажают весной, сразу после схода снега.</p>
                    <p>Сушествует несколько схем посадки, ниже приведены самые простые. Перед посадкой необходимо обработать посевной материал фунгицидным препаратом - Максим, Престиж, Табу или 2%-ный раствор марганцовки.</p>
                    <div className="garlic__scheme-wrapper">
                        <img src={scheme1} alt="scheme" className="scheme"/>
                        <img src={scheme2} alt="scheme" className="scheme"/>
                    </div>

                    <h3>Правила ухода</h3>
                    <p>Дальнейший уход за чесноком заключается в рыхлении и удалении сорняков. Полива достаточно 1 раз в 10 дней, включая естественные осадки. Для увеличения урожайности и получения более здоровых растений рекомендуется внесение органических или минеральных удобрений в виде корневых и внекорневых подкормок. Для получения более крупных головок необходимо удалить "стрелку", когда она достигнет высоты 10 см. <br/>
                    По состоянию семенной коробочки на "стрелке" определяется когда чеснок созрел, поэтому нужно оставить хотя бы пару "стрелок" на грядке. Когда пленка на семенной коробочке треснет, чеснок готов к уборке. Аккуратно выкопайте головки, избегая их травмирования, и развесьте на сушку вместе со стеблями на 3 недели в сухом, хорошо проветриваемом месте. После сушки удалить стебель и корни. Хранят чеснок в сухом месте при температуре +2℃-+4℃. Хранится чеснок 6-11 месяцев в зависимости от сорта.<br/>
                    Со временем чеснок "вырождается" - дает маленькие слабые головки даже при хорошем уходе. Поэтому раз в 4 года нужно обновлять свой посевной материал через воздушные бульбочки или путем покупки сортового однозубка/головки первого поколения чеснока.</p>
                    <h2>Ассортимент</h2>
                    <p>У нас вы можете приобрести посевной материал озимого чеснока различных генераций в зависимости от ваших нужд.<br/> 
                    Хотите получить товарную крупную головку уже на следующий год - выбирайте зубок или однозубок. Однозубок представляет собой лучший посадочный материал, поскольку он не требует дробления, удобен при посадке, обладает близкой к 100% всхожестью и гарантировано может быть использован для репродукции в течение 5 лет без обновления через бульбочку. <br/>
                    Если же вы хотите получить большой объем посевного материала для собственных нужд или для разведения и при этом уменьшить свои затраты, то выбирайте бульбочку. При посадке бульбочки весной уже в августе того же года из бульбочки вырастет однозубок. Посадив однозубок осенью на новое место, в следующем году вы получите полноценную товарную головку чеснока.</p>
                    <p className="garlic-bold">Цена на посевной материал одинакова для всех сортов. Цена зависит от типа посевного материала и его калибра.</p>
                    <div className="garlic-assort">
                        {Type}
                    </div>

                    <h2>Сорта</h2>
                    <div className="garlic-sorts">
                        {SortFirst}
                    </div>
                    <h2>Скоро в продаже:</h2>
                    <div className="garlic-sorts coming">
                        {SortSecond}
                    </div>
                </section>
        </div>
    )
}