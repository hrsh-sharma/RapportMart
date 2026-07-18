import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Select, Store  } from '@ngxs/store';
import { Observable, forkJoin } from 'rxjs';
import { GetProductByIds } from '../../../shared/action/product.action';
import { Denver } from '../../../shared/interface/theme.interface';
import { ThemeOptionService } from '../../../shared/services/theme-option.service';
import * as data from  '../../../shared/data/owl-carousel';
import { GetBrands } from '../../../shared/action/brand.action';
import { ThemeOptionState } from '../../../shared/state/theme-option.state';
import { Option } from '../../../shared/interface/theme-option.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-denver',
  templateUrl: './denver.component.html',
  styleUrls: ['./denver.component.scss']
})
export class DenverComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() data?: Denver;
  @Input() slug?: string;
  @ViewChild('heroSlider') heroSlider!: ElementRef;
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  @ViewChild('videoCarouselTrack') videoCarouselTrack!: ElementRef;

  @Select(ThemeOptionState.themeOptions) themeOption$: Observable<Option>;

  public categorySlider = data.categorySlider9;
  public productSlider6ItemMargin = data.productSlider6ItemMargin;
  public productSlider4Item = data.productSlider;
  
  // Featured Products by ID (4-5 products in a row)
  public featuredProductIds: number[] = [2939, 2940, 2941, 2949];
  public featuredProductIds2: number[] = [3318, 3321, 3325, 3330, 3343, 3344];
  public latestItemIds: number[] = [6974, 6997, 6995, 6996];
  public discountItemIds: number[] = [2941, 2950, 2956, 2959];
  public list3ItemIds: number[] = [4262, 4264, 4266, 4592];
  
  // Trending Categories
  public trendingCategories = [
    { name: 'Dresses', image: 'assets/images/dress.png', link: '/collections/dresses' },
    { name: 'T-Shirts', image: 'assets/images/tshirts.png', link: '/collections/t-shirts' },
    { name: 'Denims', image: 'assets/images/denim.png', link: '/collections/jeans' },
    { name: 'Kurtas', image: 'assets/images/kurta.png', link: '/collections/kurtas' },
    { name: 'Lehenga Choli', image: 'assets/images/lehanga.png', link: '/collections/lehenga-choli-sets' },
    { name: 'Sarees', image: 'assets/images/saree.png', link: '/collections/sarees' },
    { name: 'Co-Ord Sets', image: 'assets/images/co-ord.png', link: '/collections/co-ord-sets' },
    { name: 'Tops', image: 'assets/images/top.png', link: '/collections/tops' },
  ];

  // Hero Slider Properties
  public currentSlide = 0;
  public autoSlideInterval: any;
  public isDragging = false;
  public startX = 0;
  public currentX = 0;
  public translateX = 0;
  
  public heroSlides = [
    {
      image: 'assets/images/hero-banner.png',
      alt: 'Summer Secrets Unveiled',
      link: '/collections',
      saleText: '',
      saleSubtext: ''
    },
    {
      image: 'assets/images/hero-banner-2.png',
      alt: 'Elegance In Every Hue',
      link: '/collections',
      saleText: '',
      saleSubtext: ''
    }
  ];

  // Video Slider Properties
  public currentVideoIndex = 0;
  public videoSlides = [
    {
      src: 'assets/images/video1.mp4',
      title: 'Summer Lookbook',
      muted: false,
      autoplay: false,
      loop: true,
      playing: false
    },
    {
      src: 'assets/images/video2.mp4',
      title: 'Style Essentials',
      muted: false,
      autoplay: false,
      loop: true,
      playing: false
    }
  ];

  constructor(private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private themeOptionService: ThemeOptionService) {}

  ngAfterViewInit() {
    this.initSlider();
    this.startAutoSlide();
    this.updateVideoCarouselPosition();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // Slider Methods
  initSlider() {
    if (this.sliderTrack) {
      this.sliderTrack.nativeElement.addEventListener('mousedown', this.onDragStart.bind(this));
      this.sliderTrack.nativeElement.addEventListener('touchstart', this.onDragStart.bind(this));
      document.addEventListener('mousemove', this.onDragMove.bind(this));
      document.addEventListener('touchmove', this.onDragMove.bind(this));
      document.addEventListener('mouseup', this.onDragEnd.bind(this));
      document.addEventListener('touchend', this.onDragEnd.bind(this));
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isDragging) {
        this.nextSlide();
      }
    }, 5000); // Auto slide every 5 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    this.updateSliderPosition();
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
    this.updateSliderPosition();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSliderPosition();
  }

  updateSliderPosition() {
    if (this.sliderTrack) {
      const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
      this.translateX = -this.currentSlide * slideWidth;
      this.sliderTrack.nativeElement.style.transform = `translateX(${this.translateX}px)`;
    }
  }

  // Drag functionality
  onDragStart(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.stopAutoSlide();
    
    if (e instanceof MouseEvent) {
      this.startX = e.clientX;
    } else {
      this.startX = e.touches[0].clientX;
    }
    
    this.sliderTrack.nativeElement.style.transition = 'none';
  }

  onDragMove(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    e.preventDefault();
    
    if (e instanceof MouseEvent) {
      this.currentX = e.clientX;
    } else {
      this.currentX = e.touches[0].clientX;
    }
    
    const diffX = this.currentX - this.startX;
    const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
    const newTranslateX = this.translateX + diffX;
    
    // Limit dragging range
    const maxTranslate = 0;
    const minTranslate = -(this.heroSlides.length - 1) * slideWidth;
    
    if (newTranslateX <= maxTranslate && newTranslateX >= minTranslate) {
      this.sliderTrack.nativeElement.style.transform = `translateX(${newTranslateX}px)`;
    }
  }

  onDragEnd(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.sliderTrack.nativeElement.style.transition = 'transform 0.3s ease';
    
    const diffX = this.currentX - this.startX;
    const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
    const threshold = slideWidth * 0.3; // 30% threshold for slide change
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        this.previousSlide();
      } else {
        this.nextSlide();
      }
    } else {
      this.updateSliderPosition();
    }
    
    this.startAutoSlide();
  }

  ngOnInit() {
    if(this.data?.slug == this.slug) {
      // Combine all product IDs (from data, all product lists, and featured products)
      const allProductIds = [
        ...(this.data?.content?.products_ids || []),
        ...(this.data?.content?.products_list_1?.product_ids || []),
        ...(this.data?.content?.products_list_2?.product_ids || []),
        ...(this.data?.content?.products_list_3?.product_ids || []),
        ...(this.featuredProductIds || []),
        ...(this.featuredProductIds2 || []),
        ...(this.latestItemIds || []),
        ...(this.discountItemIds || []),
        ...(this.list3ItemIds || [])
      ];
      const uniqueProductIds = [...new Set(allProductIds)];
      
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: uniqueProductIds.length,
        ids: uniqueProductIds.join(',')
      }));

      // Conditionally call GetBrands only if brand_ids exist and are not empty
      const brandIds = this.data?.content?.brands?.brand_ids;
      const getBrand$ = brandIds && brandIds.length > 0 ?
        this.store.dispatch(new GetBrands({
          status: 1,
          ids: brandIds.join()
        })) : null;

      // Skeleton Loader
      document.body.classList.add('skeleton-body');

      const actions = [getProducts$];
      if (getBrand$) {
        actions.push(getBrand$);
      }

      forkJoin(actions).subscribe({
        complete: () => {
          document.body.classList.remove('skeleton-body');
          this.themeOptionService.preloader = false;
        }
      });
    }

    this.route.queryParams.subscribe(params => {
      if(this.route.snapshot.data['data'].theme_option.productBox === 'digital'){
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive['1180']) {
          this.productSlider6ItemMargin = {...this.productSlider6ItemMargin, items: 4, responsive :{
            ...this.productSlider6ItemMargin.responsive,
            1180: {
              items: 4
            }
          }}
        }
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive['1180']) {
          this.productSlider6ItemMargin = {...this.productSlider6ItemMargin, items: 6, responsive :{
            ...this.productSlider6ItemMargin.responsive,
            1180: {
              items: 6
            }
          }}
        }
      }
    })
  }

  // Video Carousel Methods
  nextVideo() {
    this.pauseAllVideos();
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoSlides.length;
    this.updateVideoCarouselPosition();
  }

  previousVideo() {
    this.pauseAllVideos();
    this.currentVideoIndex = this.currentVideoIndex === 0 ? this.videoSlides.length - 1 : this.currentVideoIndex - 1;
    this.updateVideoCarouselPosition();
  }

  updateVideoCarouselPosition() {
    // The transform is handled by CSS based on currentVideoIndex
    setTimeout(() => {
      const videoElements = document.querySelectorAll('.video-slide video');
      videoElements.forEach((video: any, index) => {
        if (index === this.currentVideoIndex) {
          video.muted = false;
        } else {
          video.pause();
          video.muted = true;
        }
      });
    }, 100);
  }

  pauseAllVideos() {
    const videoElements = document.querySelectorAll('.video-slide video');
    videoElements.forEach((video: any) => {
      video.pause();
    });
  }

  getVideoTransform(index: number): string {
    const centerIndex = this.currentVideoIndex;
    const diff = index - centerIndex;
    const baseScale = 0.75;
    const activeScale = 1;
    const scale = index === centerIndex ? activeScale : baseScale;
    const translateX = diff * 20; // Percentage offset for side slides
    
    return `translateX(${translateX}%) scale(${scale})`;
  }

  toggleVideoPlay(index: number) {
    const videoElements = document.querySelectorAll('.video-slide video');
    const video = videoElements[index] as HTMLVideoElement;
    
    if (video.paused) {
      video.play();
      this.videoSlides[index].playing = true;
    } else {
      video.pause();
      this.videoSlides[index].playing = false;
    }
  }

  playVideo(index: number) {
    const videoElements = document.querySelectorAll('.video-slide video');
    const video = videoElements[index] as HTMLVideoElement;
    video.play();
    this.videoSlides[index].playing = true;
  }

  viewVideo(index: number) {
    // Navigate to collections page with sortBy parameter
    this.router.navigate(['/collections'], { queryParams: { sortBy: 'asc' } });
  }

  viewAllCollections() {
    // Navigate to collections page
    this.router.navigate(['/collections'], { queryParams: { sortBy: 'asc' } });
  }

}
