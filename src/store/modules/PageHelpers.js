

export default {
        DoubleBox: {
            name: "DoubleBox",
            props:{
                images:[
                    {
                        url:'',
                        data:''
                    },
                    {
                        url:'',
                        data:''
                    }
                ]
            },
            template: (children, props = null) => {

                if (!props) {
                    props = {
                        images: [
                            {
                                url: "",
                                data: "",
                            },
                            {
                                url: "",
                                data: "",
                            }
                        ]
                    }
                }

                return `
                <div class="col-md-6">

                <a href="img/Frame5.jpg" data-fancybox="">

                    <div class="gallery-wrap square over-hide border-4 img-wrap">

                    <img src="${props.images[0].url}" alt="">

                        <div class="gallery-mask">
                            <div class="gallery-icon">
                                <i class="uil uil-plus size-22 color-white"></i>
                            </div>
                        </div>

                    </div>
                </a>

            </div>

            <div class="col-md-6 mt-4 mb-1 mt-md-0">
                <a href="img/Frame6.jpg" data-fancybox="">

                    <div class="gallery-wrap square over-hide border-4 img-wrap">

                        <img src="${props.images[1].url}" alt="">
                        <div class="gallery-mask">
                            <div class="gallery-icon">
                                <i class="uil uil-plus size-22 color-white"></i>
                            </div>
                        </div>

                    </div>

                </a>
            </div>`
            }
        },
        TripleBox: {
            
        },
        OneBox: {
            
        },
        TextBox: {
            
        }
};
