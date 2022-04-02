export default (img_url='') => {
    return `<div class="col-12 mt-1">
    <div class="video-section">
        <figure class="vimeo"> 
            <a href=${img_url} class="">
                <img src=${img_url} alt="image">
            </a>
        </figure>
    </div>
</div>`
}