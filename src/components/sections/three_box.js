export default (img_url1='',img_url2='',img_url3='') => {
    return `						<div class="col-lg-4 my-4">
    <a href=${img_url1} data-fancybox="">

        <div class="gallery-wrap square over-hide border-4 img-wrap">

        <img src=${img_url1} alt="">

            <div class="gallery-mask">
                <div class="gallery-icon">
                    <i class="uil uil-plus size-22 color-white"></i>
                </div>
            </div>

        </div>
    </a>
</div>

<div class="col-lg-4 my-4">
    <a href=${img_url2} data-fancybox="">

        <div class="gallery-wrap square over-hide border-4 img-wrap">

        <img src=${img_url2}  alt="">

            <div class="gallery-mask">
                <div class="gallery-icon">
                    <i class="uil uil-plus size-22 color-white"></i>
                </div>
            </div>

        </div>
    </a>
</div>
<div class="col-lg-4 my-4">
    <a href=${img_url3}  data-fancybox="">

        <div class="gallery-wrap square over-hide border-4 img-wrap">

        <img src=${img_url3} alt="">

            <div class="gallery-mask">
                <div class="gallery-icon">
                    <i class="uil uil-plus size-22 color-white"></i>
                </div>
            </div>

        </div>
    </a>
</div>`
}