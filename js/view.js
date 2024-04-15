//burger menu

export const elements = {
   btnBurger: document.querySelector('#btnBurger'),
   btnString: document.querySelector('#btnString'),
   nav: document.querySelector('#nav'),

   blackWindow: document.querySelector('#blackWindow'),
   headerItem1: document.querySelector('#headerItem1'),
   headerItem2: document.querySelector('#headerItem2'),
   headerItem3: document.querySelector('#headerItem3'),
};

//--------Активная страница в хедере и удаление
export function actionHeaderItem(item) {
   item.classList.add('header__nav-item--active');
}
export function deleteActionHeaderItem(item) {
   item.classList.remove('header__nav-item--active');
}
//-----------------------------------------
export function renderData(data) {
   const HomeComponent = {
      render: function () {
         return ` 
					<div class="services">
						<h2 class="services__title">Химчистка мебели, матрасов, ковров</h2>
						<a href="tel:+79299405454">
						<h2 class="services__subtitle">8(929)940-54-54</h2>
					</a>
						<div class="services__cart-box">
						<a href="#/straightSofa_page">
							<div id='cartWrapper' class="services__straight-sofa">
								<div class="services__photo">
									<img  src="./img/service_photo-1.jpg" alt="" />
								</div>
								<p class="services__text">прямые диваны</p>
							</div>
							</a>
							<a href="#/angularSofa_page" >
							<div class="services__angular-sofa">
								<div class="services__photo">
									<img src="./img/service_photo-2.jpg" alt="" />
								</div>
								<p class="services__text">угловые диваны</p>
							</div>
							</a>
							<a href="#/armchair_page">
							<div class="services__armchair">
								<div class="services__photo">
									<img src="./img/service_photo-3.jpg" alt="" />
								</div>
								<p class="services__text">кресла</p>
							</div>
							</a>
							<a href="#/chair_page">
							<div class="services__chair">
								<div class="services__photo">
									<img src="./img/service_photo-4.jpg" alt="" />
								</div>
								<p class="services__text">стулья</p>
							</div>
							</a>
							<a href="#/mattress_page">
							<div class="services__mattress">
								<div class="services__photo">
									<img src="./img/service_photo-5.jpg" alt="" />
								</div>
								<p class="services__text">матрасы</p>
							</div>
							</a>
							<a href="#/carpet_page">
							<div class="services__carpet">
								<div class="services__photo">
									<img src="./img/service_photo-6.jpg" alt="" />
								</div>
								<p class="services__text">ковры</p>
							</div>
							</a>
						</div>
					</div>
		
		
				`;
      },
   };
   const GalleryComponent = {
      render: function () {
         return `
			<div class="gelery">
			<div class="gelery__wrapper">
				<div class="gelery__item">
					<img src="./img/gelery/g1.jpg" alt="" />
				</div>
				<div class="gelery__item">
					<img src="./img/gelery/g2.jpg" alt="" />
				</div>
				<div class="gelery__item">
					<img src="./img/gelery/g3.jpg" alt="" />
				</div>
				<div class="gelery__item">
					<img src="./img/gelery/g4.jpg" alt="" />
				</div>
				<div class="gelery__item">
					<img src="./img/gelery/g5.jpg" alt="" />
				</div>
				<div class="gelery__item">
					<img src="./img/gelery/g6.jpg" alt="" />
				</div>
			</div>
		</div>
				`;
      },
   };
   const ContactComponent = {
      render: function () {
         return `
			<div class="contacts-info">
			<ul class="contacts-info__list">
				Наши контакты
				<li class="contacts-info__item">Город Москва</li>

				<li class="contacts-info__item"><a href="tel:+79299405454">8-929-940-54-54</a></li>

				<li class="contacts-info__item">
					<a href="https://wa.me/+79299405454">
						<img class="contacts-info__img" src="./img/icons/logoWa.png" alt="" />
					</a>
				</li>
				<li class="contacts-info__item">
					<a href="https://t.me/+79299405454 ">
						<img class="contacts-info__img" src="./img/icons/logoTG.png" alt="" />
					</a>
				</li>
				<li class="contacts-info__item">
					<a href="//instagram.com/chistih_del_master?igshid=xnd68c05fbue">
						<img class="contacts-info__img" src="./img/icons/logoInst.png" alt="" />
					</a>
				</li>
			</ul>
		</div>
				`;
      },
   };

   const StraightSofaComponent = {
      render: function () {
         //---------------------------Диван прямой
         const size1 = data.sofaStraight.sizes.size1;
         const size2 = data.sofaStraight.sizes.size2;
         const size3 = data.sofaStraight.sizes.size3;
         const size4 = data.sofaStraight.sizes.size4;
         const size5 = data.sofaStraight.sizes.size5;
         const size6 = data.sofaStraight.sizes.size6;
         //---------- прайс
         const priceSize1 = data.sofaStraight.price.size1;
         const priceSize2 = data.sofaStraight.price.size2;
         const priceSize3 = data.sofaStraight.price.size3;
         const priceSize4 = data.sofaStraight.price.size4;
         const priceSize5 = data.sofaStraight.price.size5;
         const priceSize6 = data.sofaStraight.price.size6;
         const dirtPrice = data.sofaStraight.price.dirt;
         const sleepingAreaPrice = data.sofaStraight.price.sleepingArea;
         //--------подушки
         const pillowsSize1 = data.sofaStraight.pillows.size1;
         const pillowsSize2 = data.sofaStraight.pillows.size2;
         const pillowsSize3 = data.sofaStraight.pillows.size3;
         //------------подушки прайс
         const pricepillowSize1 = data.sofaStraight.price.pillowSize1;
         const pricepillowSize2 = data.sofaStraight.price.pillowSize2;
         const pricepillowSize3 = data.sofaStraight.price.pillowSize3;

         return `
				<div class="price-block">
				<div class="price-block__item">
				<div class="price-block__close" id="closePrice"> <a href="/furniture-cleaning/"> &#215;</a></div>
				<div class="price-block__img">
					<img src="./img/priceBlock/price-straight-sofa.jpg" alt="" />
				</div>
				<div class="price-block__size-box">
				<ul class="price-block__size">
					<li>Диван прямой до ${size1} см - ${priceSize1} р</li>
					<li>Диван прямой ${size2} см - ${priceSize2} р</li>
					<li>Диван прямой ${size3} см - ${priceSize3} р</li>
					<li>Диван прямой ${size4} см - ${priceSize4} р</li>
					<li>Диван прямой ${size5} см - ${priceSize5} р</li>
					<li>Диван прямой от ${size6} см - ${priceSize6} р</li>
					<li>Если сильные загрязнения - ${dirtPrice} р</li>
					<li>Выдвижное спальное место - ${sleepingAreaPrice} р</li>
				</ul>
		
				<ul class="price-block__size">
					<li>Подушки - 3 подушки бесплатно</li>
					<li>Больше трех :</li>
					<li>${pillowsSize1} - ${pricepillowSize1} р</li>
					<li>${pillowsSize2} - ${pricepillowSize2} р</li>
					<li>${pillowsSize3} - ${pricepillowSize3} р</li>
				
				</ul>
			</div>
			</div>
			</div>`;
      },
   };
   const AngularSofaComponent = {
      render: function () {
         //---------------------------Диван угловой

         const size1 = data.sofaСorner.sizes.size1;
         const size2 = data.sofaСorner.sizes.size2;
         const size3 = data.sofaСorner.sizes.size3;
         //---------- прайс

         const priceSize1 = data.sofaСorner.price.size1;
         const priceSize2 = data.sofaСorner.price.size2;
         const priceSize3 = data.sofaСorner.price.size3;
         const dirtPrice = data.sofaСorner.price.dirt;
         const sleepingAreaPrice = data.sofaСorner.price.sleepingArea;
         //--------подушки

         const pillowsSize1 = data.sofaСorner.pillows.size1;
         const pillowsSize2 = data.sofaСorner.pillows.size2;
         const pillowsSize3 = data.sofaСorner.pillows.size3;

         //------------подушки прайс
         const pricepillowSize1 = data.sofaСorner.price.pillowSize1;
         const pricepillowSize2 = data.sofaСorner.price.pillowSize2;
         const pricepillowSize3 = data.sofaСorner.price.pillowSize3;
         return `
				<div id="" class="price-block">
				<div class="price-block__item">
					<div class="price-block__close" id="closePrice"> <a href="/furniture-cleaning/">&#215;</a></div>
					<div class="price-block__img">
						<img src="./img/priceBlock/price-angular-sofa.jpg" alt="" />
					</div>
					<div class="price-block__size-box">
						<ul class="price-block__size">
							<li>Диван угловой ${size1} см - ${priceSize1} р</li>
							<li>Диван угловой ${size2} см - ${priceSize2} р</li>
							<li>Диван угловой ${size3} см - от ${priceSize3} р</li>
							<li>Если сильные загрязнения - ${dirtPrice} р</li>
							<li>Выдвижное спальное место - ${sleepingAreaPrice} р</li>
						</ul>
		
						<ul class="price-block__size">
							<li>Подушки - 3 подушки бесплатно</li>
							<li>Больше трех :</li>
							<li>${pillowsSize1} - ${pricepillowSize1} р</li>
							<li>${pillowsSize2} - ${pricepillowSize2} р</li>
							<li>${pillowsSize3} - ${pricepillowSize3} р</li>
						</ul>
					</div>
				</div>
			</div>`;
      },
   };
   const ArmchairComponent = {
      render: function () {
         const size1 = data.armchair.price.size1;
         const size2 = data.armchair.price.size2;
         const size3 = data.armchair.price.size3;
         const size4 = data.armchair.price.size4;
         const size5 = data.armchair.price.size5;
         const size6 = data.armchair.price.size6;
         const size7 = data.armchair.price.size7;
         return `
				<div id="" class="price-block">
				<div class="price-block__item">
					<div class="price-block__close" id="closePrice"> <a href="/furniture-cleaning/">&#215;</a></div>
					<div class="price-block__img">
					<img src="./img/priceBlock/price-armchair.jpg" alt="" />
				</div>
				<div class="price-block__size-box">
					<ul class="price-block__size">
						<li>Кресло 50 - 60 см - ${size1} р</li>
						<li>Кресло от 80 см - 100 см ${size2} р</li>
						<li>Кресло от 100 см - ${size3} р</li>
						<li>Кресло геймера - ${size4} р</li>
						<li></li>
					</ul>
		
					<ul class="price-block__size">
						<li>Кресло кровать - ${size5} р</li>
						<li>Кресло компьютерное - ${size6} р</li>
						<li>Кресло офисное - ${size7} р</li>
						<li></li>
						<li></li>
					</ul>
					</div>
				</div>
			</div>`;
      },
   };

   const ChairComponent = {
      render: function () {
         const size1 = data.chair.price.size1;
         const size2 = data.chair.price.size2;
         const size3 = data.chair.price.size3;
         const size4 = data.chair.price.size4;
         const size5 = data.chair.price.size5;

         return `
				<div id="" class="price-block">
				<div class="price-block__item">
					<div class="price-block__close" id="closePrice"> <a href="/furniture-cleaning/">&#215;</a></div>
					<div class="price-block__img">
					<img src="./img/priceBlock/price-chair.jpg" alt="" />
				</div>
				<div class="price-block__size-box">
					<ul class="price-block__size">
						<li>Стул с широкой спинкой - ${size1} р</li>
						<li>Стул со спинкой - ${size2} р</li>
						<li>Стул без спинки - ${size3} р</li>
						<li>Банкетка - ${size4} р</li>
						<li>Пуф - ${size5} р</li>
					</ul>
		
			
					</div>
				</div>
			</div>`;
      },
   };
   const MattressComponent = {
      render: function () {
         const size01 = data.mattress.price.size01;
         const size1 = data.mattress.price.size1;

         const size02 = data.mattress.price.size02;
         const size2 = data.mattress.price.size2;

         const size03 = data.mattress.price.size03;
         const size3 = data.mattress.price.size3;

         const size04 = data.mattress.price.size04;
         const size4 = data.mattress.price.size4;

         const dirt = data.mattress.price.dirt;

         return `
				<div id="" class="price-block">
				<div class="price-block__item">
					<div class="price-block__close" id="closePrice"> <a href="/furniture-cleaning/">&#215;</a></div>
					<div class="price-block__img">
					<img src="./img/priceBlock/price-mattress.jpg" alt="" />
				</div>
				<div class="price-block__size-box">
					<ul class="price-block__size mattress">
						<li>
							Матрас 60-80/120 см: одна сторона - ${size01} / две стороны -  ${size1}  р
						</li>
						<li>
							Матрас 80-100/200 см: одна сторона -  ${size02}  / две стороны -  ${size2}  р
						</li>
						<li>
							Матрас 100-140/200 см: одна сторона -  ${size03}  / две стороны -  ${size3}  р
						</li>
						<li>
							Матрас 160-200/200 см: одна сторона -  ${size04}  / две стороны -  ${size4}  р
						</li>
						<li>Если есть очень сильные загрязнение +  ${dirt}  р</li>
					</ul>
		
		
			
					</div>
				</div>
			</div>`;
      },
   };
   const CarpetComponent = {
      render: function () {
         const size1 = data.carpet.price.size1;
         const size2 = data.carpet.price.size2;
         return `
				<div id="" class="price-block">
				<div class="price-block__item">
					<div class="price-block__close" id="closePrice"> <a href="/furniture-cleaning/">&#215;</a></div>
					<div class="price-block__img">
					<img src="./img/priceBlock/price-carpet.jpg" alt="" />
				</div>
				<div class="price-block__size-box">
					<ul class="price-block__size mattress">
						<li>Ковер ворс до 1,5 см - ${size1} квадратный метр</li>
						<li>Ковер ворс от 1,5 см - ${size2} квадратный метр</li>
						<li></li>
					</ul>
		
			
					</div>
				</div>
			</div>`;
      },
   };

   const routes = [
      { path: '/', component: HomeComponent },
      { path: 'galleryPage', component: GalleryComponent },
      { path: 'contactPage', component: ContactComponent },
      { path: 'straightSofa_page', component: StraightSofaComponent },
      { path: 'angularSofa_page', component: AngularSofaComponent },
      { path: 'armchair_page', component: ArmchairComponent },
      { path: 'chair_page', component: ChairComponent },

      { path: 'mattress_page', component: MattressComponent },
      { path: 'carpet_page', component: CarpetComponent },
   ];

   function findComponentByPath(path, routes) {
      return routes.find(function (route) {
         return route.path === path;
      });
   }

   function router() {
      const pathArray = location.hash.split('/');

      let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
      currentPath = currentPath === '' ? '/' : currentPath;

      const component = findComponentByPath(currentPath, routes);

      document.querySelector('#app').innerHTML = component.component.render();
   }

   window.addEventListener('load', router);
   window.addEventListener('hashchange', router);
}
