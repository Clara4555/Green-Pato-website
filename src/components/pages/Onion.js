import React from 'react';
import '../../App.css';
import {assort, sorts} from '../../onion';
import {OnionType, OnionSort} from '../OnionItem';
import scheme3 from '../../images/onion/scheme3.jpeg';
import scheme4 from '../../images/onion/scheme4.jpeg';
import scheme5 from '../../images/onion/scheme5.jpeg';


export default function Onion() {
   
    const TypeShalot = assort.slice(0, 2).map(item => 
        <OnionType 
        src={item.src}
        alt={item.alt}
        label={item.label}
        key={item.id}
        />
    );
    const TypeRep = assort.slice(2, 4).map(item => 
        <OnionType
        src={item.src}
        alt={item.alt}
        label={item.label}
        key={item.id}
        />
    );

    const SortShalot = sorts.slice(0, 4).map(i =>
        <OnionSort
        src={i.src}
        alt={i.alt}
        key={i.id}
        label={i.label}
        item={i.item}
        text={i.text}
        priceA={i.priceA}
        priceB={i.priceB}
        />
    );

    const SortRep = sorts.slice(4, 9).map(i =>
        <OnionSort
        src={i.src}
        alt={i.alt}
        key={i.id}
        label={i.label}
        item={i.item}
        text={i.text}
        priceA={i.priceA}
        priceB={i.priceB}
        />
    );

    return (
        <div className="onion" id="onion">
            <div className="onion-header">
                <h1>Лук и лук-шалот</h1>
            </div>

            <section className="content">
                    <h3>Описание культуры</h3>
                    <p>Лук (лат. Allium) имеет несколько сотен видов и незаменим в кулинарии. Довольно много декоративных видов. Условно сорта лука делят на универсальные и салатные сорта. Салатные сорта имеют более мягкий и иногда даже сладковатый вкус, они прекрасны в свежем виде. Большинство видов луков, выращиваемых в нашей стране, являются двухлетними культурами. Однако, в последние годы стали популярны крупноплодные сорта "Халцедон", "Эксибишен", которые выращиваются как однолетняя культура - из семени в луковицу за один сезон. <br/>
                    Особую разновидность лука представляет многозачатковый лук, или лук-шалот с его нежным, полуострым вкусом. Название "шалот" пришло из французской кухни, в которой не используется привычный нам репчатый лук, а используется именно лук-шалот. Отличительной особенностью многозачаткового лука является то, что маточная луковица в процессе роста дает дополнительные луковицы, которые растут "гнездом". Масса этих дополнительных луковок небольшая. В гнезде бывает от 3 до 15 луковиц в зависимости от сорта.</p>
                    <h3>Польза лука</h3>
                    <p>В отличие от чеснока у лука съедобной является и головка, и зелень ("перо"), хотя есть и исключения, например, лук-порей. Большую ценность представляет собой ранняя зелень лука, богатая витамином С. Головка лука также богата витамином С, и является естественным его источником в зимние месяцы при употреблении лука в сыром виде.</p>
                    <h3>Условия выращивания</h3>
                    <p>Лук выращивают на легких почвах с нейтральной кислотностью. Место посадки должно быть солнечным и с хорошим дренажом.<br/>
                    В середине вегетационного периода лук часто дает один или несколько цветоносов "стрелок". С целью увеличения размера головки стрелку уладаляют. Стрелкуется, как правило крупный лук-севок (более 24 мм в диаметре). Мелкий севок (до 14 мм) не стрелукется, но и в полноценную луковицу не вырастает. Поэтому рекомендуемый размер лука-севка на луковицу 14-24 мм, на зелень - до 14 мм.<br/>Семена лука ("чернушка") довольно мелкие, черного цвета, созревают в конце вегетационного периода. Семена собирают, на следующий год высаживают и получают лук-севок.</p>
                    <h3>Посадка</h3>
                    <p>Посадка лука возможна как поздней осенью, так и весной. При посадке осенью температура почвы должна быть около +5℃. Весной лук можно сажать сразу после схода снега, так как это холодостойкая культура. Если перо пострадает от возвратных заморозков, растение восстановится. На зелень лук можно сажать до июня включительно. <br/>
                    На зелень рекомендуется сажать отдельные грядки лука, так как срыв пера уменьшает поступление питательных веществ в луковицу и соотвественно ее размер.</p>
                    <p>Схемы посадки севком и семенами приведены ниже. Севок перед посадкой необходимо обработать фунгицидным препаратом - Максим, Престиж, Табу или 2%-ный раствор марганцовки.</p>
                    <h3>Правила ухода</h3>
                    <p>Дальнейший уход за чесноком заключается в рыхлении, удалении сорняков и поливе раз в неделю. Уборку лука производят при полегании 50% пера. Лук выкапывают, оставляют на 2 недели на просушку, не обрывая остаки пера. Спустя 2 недели сухое перо легко отшелушивается, и лук убирается на хранение. Хранить лук можно даже при комнатной температуре, но обязательным условием является абсолютная сухость помещения для хранения.</p>
                    <div className="onion__scheme-wrapper">
                        <img src={scheme3} alt="scheme" className="scheme"/>
                        <img src={scheme5} alt="scheme" className="scheme"/>
                        <img src={scheme4} alt="scheme" className="scheme"/>
                    </div>

                    <h2>Ассортимент</h2>
                    <p>В нашем ассортименте есть как универсальный лук, так и салатный, а также представлено несколько сортов лука-шалота. Лук-шалот мало распространен в нашей стране, поэтому цены на посевной материал лука-шалота довольно высоки из-за ограниченного его объема производства. Особенно крупноплодные сорта зарубежной селекции.<br/>Мы предлагаем к продаже севок "на головку" диаметром 14-24 мм, который будет мало стрелковаться и в июле-августе даст полнеценную крупную головку лука. Пригоден как для осенней, так и для весенней посадки. Также мы предлагаем семена некоторых сортов лука для весенней посадки.</p>
                    <div className="onion-assort">
                        <div>
                            <h3>Лук-шалот</h3>
                            <div className="onion-assort-shalot">
                                {TypeShalot}
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div>
                            <h3>Лук репчатый</h3>
                            <div className="onion-assort-rep">
                                {TypeRep}
                            </div>
                        </div>
                    </div>
                   

                    <h2>лук-шалот сорта</h2>
                    <div className="onion-sorts">
                        {SortShalot}
                    </div>

                    <h2>лук репчатый сорта</h2>
                    <div className="onion-sorts">
                        {SortRep}
                    </div>
                </section>
        </div>
    )
}
