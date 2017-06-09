<html>

    <head>

        <meta charset="UTF-8">

        <meta name="description" content="Tribute page on Ashoka- the great for freeCodeCamp.">

        <meta name="keywords" content="HTML,CSS,bootstap, javascript, jquery, ashoka, tribute, page, aakriti, freecodecamp">

        <meta name="author" content="Aakriti kashyap">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Tribute Page</title>

        <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono+Montserrat|Satisfy|Roboto+Lato" rel="stylesheet">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="style.css">

    </head>

    <body>

        

        <header class="display-none">

            <nav class="navbar navbar-default">

                <div class="container middle">

                    

                    <div class="navbar-header">

                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">

                            <span class="sr-only">Toggle navigation</span>

                            <span class="icon-bar"></span>

                            <span class="icon-bar"></span>

                            <span class="icon-bar"></span>

                        </button>

                        <a class="navbar-brand ashoka" href="#">Ashoka</a>

                    </div>



                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul class="nav navbar-nav navbar-right">

                        <li id="about-li"><a href="#">About him</a></li>

                        <li id="architecture-li"><a href="#">Architecture</a></li>

                        <li id="buddhism-li"><a href="#">Buddhism</a></li>

                        <li id="conatact-li"><a href="#">Contact us</a></li>

                    </ul>

                    </div>

                </div>

            </nav>

        </header>



        <!--cover pic starts-->

        <div class="first-div">

            <img src="images\Chakravartin-Ashoka-Samrat-Serial-Images.jpg" alt="cover pic of ashoka the great" 

                    class="cover-pic">

            <nav id="nav-hero">

                <div class="container">

                    <ul>

                        <li class="about-li"><a href="#">About him</a></li>

                        <li class="architecture-li"><a href="#">Architecture</a></li>

                        <li class="buddhism-li"><a href="#">Buddhism</a></li>

                        <li class="conatact-li"><a href="#">Contact us</a></li>

                    </ul>

                </div>

            </nav>

        </div>

        <!--cover pic ends-->



        <div class="container-fluid">

            <!--about him starts-->

            <div class="about row" id="about-him">

                <div class="col-md-6">

                    <div class="about-text text-center">

                        <h1>About Ashoka</h1>

                        <br>

                        <p>Ashoka, also known as <b>‘Ashoka the Great’</b>, was the third ruler of the Mauryan Empire and one of the greatest emperors of India.</p>

                        <p>He is largely credited for spreading Buddhism in many parts of the world. He grew up to become an absolutely fearsome king with a vision to expand his empire continuously, which stretched across the Indian subcontinent leaving aside the southernmost parts of Tamil Nadu and Kerala.</p>

                        <p>However, it was the conquest of Kalinga, seen as the bloodiest and most lethal, which left him shattered and transformed him from a fierce vengeful ruler to a peaceful and non-violent emperor.</p>

                    </div>

                </div>

                <div class="col-md-6 about-slider">

                    <div id="myCarousel" class="carousel slide" data-ride="carousel">

                        <!-- Indicators -->

                        <ol class="carousel-indicators">

                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>

                            <li data-target="#myCarousel" data-slide-to="1"></li>

                            <li data-target="#myCarousel" data-slide-to="2"></li>

                            <li data-target="#myCarousel" data-slide-to="3"></li>

                            <li data-target="#myCarousel" data-slide-to="4"></li>

                        </ol>



                        <!-- Wrapper for slides -->

                        <div class="carousel-inner">

                            <div class="item active">

                            <img src="images\slide1.jpg" alt="Ashoka image" class="slider-image">

                            </div>



                            <div class="item">

                            <img src="http://spiderimg.amarujala.com/assets/images/firkee.in/wp-content/uploads/2015/11/21.-Maharana-Pratap.jpg" alt="Ashoka image">

                            </div>



                            <div class="item">

                            <img src="images\slide3.png" alt="Ashoka image">

                            </div>



                            <div class="item">

                            <img src="images\slide4.jpg" alt="Ashoka image">

                            </div>



                            <div class="item">

                            <img src="images\slide5.JPG" alt="Ashoka image">

                            </div>

                        </div>



                        <!-- Left and right controls -->

                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">

                            <span class="glyphicon glyphicon-chevron-left"></span>

                            <span class="sr-only">Previous</span>

                        </a>

                        <a class="right carousel-control" href="#myCarousel" data-slide="next">

                            <span class="glyphicon glyphicon-chevron-right"></span>

                            <span class="sr-only">Next</span>

                        </a>

                    </div>

                </div>

            </div>

            <!--about him ends-->



            <!--family starts-->

            <div class="row family">

                <div class="col-md-4 family-thumbnail family-heading">Ashoka's family</div>

                <div class="col-md-4 family-thumbnail">

                    <img src="images\chandragupta_maurya.jpg" 

                    alt="chandragupt maurya, askas grandgather" class="family-pic" title="Chandragupt Maurya, Ashoka's Grandgather">

                </div>

                <div class="col-md-4 family-thumbnail">

                    <img src="images\kaurvaki.jpg" 

                    alt="kaurvaki, ashoka's wife" class="family-pic" title="Kaurvaki - Ashoka's Wife">

                </div>

                <div class="col-md-4 family-thumbnail">

                    <img src="images\bidusar.jpg" alt="bindusar, father of ashoka"

                    class="family-pic" title="Bindusar - Ashoka's Father">

                </div>

                <div class="col-md-4 family-thumbnail">

                    <img src="images\Chanakya.jpg" alt="chankya, ashoka's guruji" class="family-pic"

                    title="Chankya - Ashoka's Mentor">

                </div>

                <div class="col-md-4 family-thumbnail">

                    <img src="images\shubandgi.jpg" 

                    alt="shubandhgi, ashoka's mom" class="family-pic" title="Shubandgi - Ashoks's Mother">

                </div>

            </div>

            <!--family ends-->



            <!--achitecture starts-->

            <div class="row achitecture" id="achitecture">

                <div class="col-md-6 achitecture-thumbnail">

                    <div class="achitecture-text">

                        <h1>Architecture</h1> <br>

                        <p>The reign of Ashoka presents in perfection all conditions as being favorable to the development of notable schools of art and literature.</p>

                        <p>Ashoka was a mighty Mauryan emperor, who expanded the borders and influence of the empire to its height. As he did, his architectural influence spread across India. Part of this was through his acumen for maintaining consolidated power.</p>

                    </div>

                </div>

                <div class="col-md-3 achitecture-thumbnail bg1">

                    <img src="images\Taxila.jpg" 

                    alt="Taxilla university" class="achitecture-pic" title="Taxila University">

                </div>

                <div class="col-md-3 achitecture-thumbnail bg2">

                     <img src="images\Barabar_Caves.jpg" alt="Barabar Caves" class="achitecture-pic" 

                     title="Barabar Caves, staircase and cave entrance.">

                </div>

            </div>

            <div class="row achitecture">

                <div class="col-md-3 achitecture-thumbnail bg2">

                     <img src="images\Nalanda_University.jpg" 

                     alt="Nalanda Unviersity" class="achitecture-pic" title="Nalanda University.">

                </div>

                <div class="col-md-3 achitecture-thumbnail bg1">

                     <img src="images\konark-sun-temple.jpg" alt="konark-sun-temple" 

                     class="achitecture-pic" title="Konark Sun Temple">

                </div>

                <div class="col-md-3 achitecture-thumbnail bg2">

                     <img src="images\ashoka-pillar-vaishali.jpg" alt="pillars of Ashoka" class="achitecture-pic"

                      title="The pillars of Ashoka.">

                </div>

                <div class="col-md-3 achitecture-thumbnail bg1">

                     <img src="images\Stupa-Sanchi.jpg" alt="Sanchi stupa" class="achitecture-pic" 

                     title="Sanchi is a Buddhist complex, famous for its Great Stupa.">

                </div>

            </div>

            <!--achitecture ends-->



            <!--buddhism starts-->

            <div class="row" id="buddhism">

                <div class="col-md-12 buddhism">

                    <div class="buddhism-text">

                        <h1 class="buddhism-heading text-center">Ashoka and Buddhism</h1>

                    </div>

                </div>

            </div>

            <div class="row buddhism-detail">

                <div class="col-md-6 buddhism-thubnail1">

                    <h3 class="text-center">Om Mani Padme Hum</h3>

                </div>

                <div class="col-md-3 buddhism-thubnail2">

                    <img src="images\budha4.jpg" alt="Lord budha structure" class="budha-img">

                </div>

                <div class="col-md-3 buddhism-thubnail3">

                    <img src="images\budha3.jpg" alt="Lord budha structure" class="budha-img">

                </div>

                <div class="col-md-6 buddhism-thubnail4">

                    <div class="text-center quote"><h1 class="quote-h1">"If you light a lamp for somebody, it will also brighten your path."</h1></div>

                </div>

                <div class="col-md-3 buddhism-thubnail5">

                    <img src="images\budha1.jpg" alt="Lord budha structure" class="budha-img">

                </div>

                <div class="col-md-3 buddhism-thubnail6">

                    <img src="images\budha2.jpg" alt="Lord budha enlightment" class="budha-img">

                </div>

            </div>

            <!--buddhism ends-->



            <!--contact us starts-->

            <div class="row" id="contact-us">

                <div class="col-md-6 contact-us-heading text-center"><h1>Contact us</h1></div>

                <div class="col-md-6 map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d728.999681292389!2d72.82785980022183!3d18.917753310593582!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1496984778484" width="100%" height="50%" frameborder="0" style="border:0" allowfullscreen></iframe>

                </div>

                <div class=" col-sm-6 col-md-3 contact-us-thumbnail bg2">

                    <div class="contact-us-text">

                        <h6>Mobile</h6>

                        <h6>7415156781</h6>

                    </div>

                    <div class="contact-us-image">

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">

                            <style type="text/css">

                                .icm-st0{fill:#FFFFFF;}

                                .icm-st1{fill:#595A5C;}

                                .icm-st2{fill:#D2D3D4;}

                                .icm-st3{fill:none;stroke:#DD6D54;stroke-width:1.5641;stroke-miterlimit:10;}

                                .icm-st4{fill:#EB654A;}

                            </style>

                            <g>

                                <path class="icm-st0" d="M141,191H59c-6.6,0-12-5.4-12-12V21c0-6.6,5.4-12,12-12h82c6.6,0,12,5.4,12,12v158

                                    C153,185.6,147.6,191,141,191z"></path>

                                <rect x="58.6" y="20.3" class="icm-st1" width="82.8" height="134.8"></rect>

                                <polygon class="icm-st2" points="58.6,155.1 58.6,20.3 141.4,20.3 	"></polygon>

                                <g class="pulse-ring-wrapper">

                                    <g class="pulse-ring">

                                        <path class="icm-st3" d="M100,101c7.2,0,13-5.8,13-13c0-7.2-5.8-13-13-13s-13,5.8-13,13C87,95.2,92.8,101,100,101"></path>

                                    </g>

                                </g>	

                                <g>

                                    <path class="icm-st4" d="M100,104.3c9.2,0,16.6-7.4,16.6-16.6s-7.4-16.6-16.6-16.6s-16.6,7.4-16.6,16.6S90.8,104.3,100,104.3"></path>

                                    <path class="icm-st0" d="M97.8,89.6c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.3-0.6,0.4-1.2,0.4h-1.9v-2.6h1.9c0.6,0,1,0.2,1.2,0.4

                                        C97.6,88.9,97.8,89.2,97.8,89.6 M96.9,85.6c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.3-1,0.3h-1.3v-2.1h1.3c0.6,0,0.8,0.1,1,0.3

                                        C96.8,85.1,96.9,85.3,96.9,85.6 M98.2,87.1c0.3-0.3,0.6-1,0.6-1.6c0-0.8-0.4-1.5-0.9-1.9c-0.5-0.4-1.1-0.7-2.2-0.7h-3.3v9.6h3.8

                                        c1.2,0,2-0.3,2.5-0.9c0.5-0.5,0.9-1.3,0.9-2.1C99.6,88.5,99,87.5,98.2,87.1"></path>

                                    <path class="icm-st0" d="M106.7,89.7c0,0.6-0.2,1.1-0.6,1.5c-0.4,0.4-0.9,0.6-1.7,0.6h-2.6v-4.1h2.6c0.8,0,1.3,0.2,1.7,0.6

                                        C106.5,88.6,106.7,89.1,106.7,89.7 M105.5,86.3c-0.3,0.3-0.7,0.5-1.4,0.5h-2.3v-3.1h2.3c0.7,0,1.1,0.2,1.4,0.5

                                        c0.3,0.3,0.4,0.6,0.4,1.1C105.9,85.7,105.7,86,105.5,86.3 M105.8,87.1c0.5-0.4,0.9-1.1,0.9-1.8c0-0.7-0.3-1.3-0.7-1.7

                                        c-0.4-0.4-1-0.6-1.9-0.6h-3.1v9.6h3.5c1,0,1.7-0.3,2.2-0.7c0.6-0.5,0.9-1.3,0.9-2.1C107.5,88.5,106.8,87.5,105.8,87.1"></path>

                                </g>

                                <path class="icm-st2" d="M100,182.5c5.5,0,9.9-4.4,9.9-9.9s-4.4-9.9-9.9-9.9c-5.5,0-9.9,4.4-9.9,9.9S94.5,182.5,100,182.5"></path>

                            </g>

                        </svg>

                    </div>

                </div>

                <!--<div class="col-sm-6 col-md-3 contact-us-thumbnail bg1">

                    <div class="contact-us-text">

                        <h6>home</h6>

                        <h6>02 6257 1405</h6>

                    </div>

                    <div class="contact-us-image">

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">

                            <style type="text/css">

                                .cp-st0{fill:#EB654A;}

                                .cp-st1{fill:#D2D3D4;}

                                .cp-st2{fill:#595A5C;}

                                .cp-st3{fill:#FFFFFF;}

                                .cp-st4{fill:#B2B3B5;}

                                .cp-st11{fill:#bf624f;}

                                .cp-st12{fill:#474a4b;}

                            </style>

                            <g>

                                <path class="cp-st0" d="M100,67.8h17.2c3.8,0,6.9-3.1,6.9-6.9v-5.1h12c0,0,0.5,43.2,34.9,61.9l-7.3,56.6H100H36.4l-7.3-56.6

                                    C63.4,99,64,55.8,64,55.8h12v5.1c0,3.8,3.1,6.9,6.9,6.9H100z"></path>

                                <path class="cp-st0 phone-handle" d="M151.2,55.9l-2.9,12.5c-1.1,4.8,1.6,9.7,6.2,11.5l18.9,7c5.2,1.9,10.9-0.8,12.7-6l7.3-20.7

                                    C170.3,38.9,137,25.6,100,25.6S29.7,38.9,6.5,60.2l7.3,20.7c1.8,5.2,7.6,7.9,12.7,6l18.9-7c4.7-1.7,7.3-6.6,6.2-11.5l-2.9-12.5

                                    H151.2"></path>

                                <g>

                                    <path class="cp-st11" d="M124.1,60.5h12.3c-0.3-2.9-0.3-4.7-0.3-4.7h-12V60.5z"></path>

                                    <path class="cp-st11" d="M75.9,55.8H64c0,0,0,1.7-0.3,4.7h12.3V55.8z"></path>

                                </g>

                                <path class="cp-st2" d="M100,158.5c20.6,0,37.2-16.7,37.2-37.2S120.6,84,100,84c-20.6,0-37.2,16.7-37.2,37.2S79.4,158.5,100,158.5"></path>

                                <path class="cp-st3" d="M100,139c9.8,0,17.8-8,17.8-17.8s-8-17.8-17.8-17.8s-17.8,8-17.8,17.8S90.2,139,100,139"></path>

                                <path class="cp-st12" d="M66.3,121.3c0-20,15.7-36.2,35.4-37.2c-0.6,0-1.2,0-1.8,0c-20.6,0-37.2,16.7-37.2,37.2

                                    c0,20.6,16.7,37.2,37.2,37.2c0.6,0,1.2,0,1.8,0C82,157.5,66.3,141.2,66.3,121.3z"></path>

                                <path class="cp-st0" d="M97.6,123.2c0,0.4-0.1,0.7-0.4,0.9c-0.2,0.3-0.6,0.5-1.3,0.5h-2v-2.8h2c0.7,0,1.1,0.2,1.3,0.5

                                    C97.5,122.5,97.6,122.9,97.6,123.2 M96.7,119c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.4-1.1,0.4h-1.4v-2.2h1.4c0.6,0,0.9,0.1,1.1,0.4

                                    C96.6,118.4,96.7,118.7,96.7,119 M98,120.6c0.3-0.4,0.7-1,0.7-1.7c0-0.8-0.4-1.6-1-2.1c-0.5-0.4-1.1-0.7-2.3-0.7h-3.5v10.3h4

                                    c1.3,0,2.1-0.4,2.7-0.9c0.6-0.6,0.9-1.4,0.9-2.2C99.6,122.1,99,121.1,98,120.6"></path>

                                <path class="cp-st0" d="M107.2,123.4c0,0.6-0.3,1.2-0.7,1.6c-0.4,0.4-0.9,0.6-1.8,0.6h-2.8v-4.4h2.8c0.9,0,1.4,0.2,1.8,0.6

                                    C106.9,122.2,107.2,122.7,107.2,123.4 M105.8,119.8c-0.3,0.3-0.7,0.5-1.5,0.5h-2.4V117h2.4c0.8,0,1.2,0.2,1.5,0.5

                                    c0.3,0.3,0.4,0.7,0.4,1.1S106.1,119.5,105.8,119.8 M106.2,120.6c0.6-0.5,0.9-1.2,0.9-1.9c0-0.7-0.3-1.4-0.8-1.8

                                    c-0.5-0.4-1.1-0.7-2-0.7H101v10.3h3.7c1.1,0,1.8-0.3,2.3-0.8c0.6-0.6,1-1.4,1-2.3C108.1,122.1,107.3,121,106.2,120.6"></path>

                                <circle class="cp-st4" cx="100" cy="93.9" r="3.6"></circle>

                                <circle class="cp-st4" cx="100" cy="148.6" r="3.6"></circle>

                                <circle class="cp-st4" cx="86.3" cy="97.6" r="3.6"></circle>

                                <circle class="cp-st4" cx="113.7" cy="144.9" r="3.6"></circle>

                                <circle class="cp-st4" cx="76.4" cy="107.6" r="3.6"></circle>

                                <circle class="cp-st4" cx="123.6" cy="134.9" r="3.6"></circle>

                                <circle class="cp-st4" cx="72.7" cy="121.3" r="3.6"></circle>

                                <circle class="cp-st4" cx="76.4" cy="134.9" r="3.6"></circle>

                                <circle class="cp-st4" cx="86.3" cy="144.9" r="3.6"></circle>

                            </g>

                        </svg>

                    </div>

                </div>-->

                <div class=" col-sm-6 col-md-3 contact-us-thumbnail bg2">

                    <div class="contact-us-text">

                        <h6>Alternate Mobile</h6>

                        <h6>7415156781</h6>

                    </div>

                    <div class="contact-us-image">

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">

                            <style type="text/css">

                                .icm-st0{fill:#FFFFFF;}

                                .icm-st1{fill:#595A5C;}

                                .icm-st2{fill:#D2D3D4;}

                                .icm-st3{fill:none;stroke:#DD6D54;stroke-width:1.5641;stroke-miterlimit:10;}

                                .icm-st4{fill:#EB654A;}

                            </style>

                            <g>

                                <path class="icm-st0" d="M141,191H59c-6.6,0-12-5.4-12-12V21c0-6.6,5.4-12,12-12h82c6.6,0,12,5.4,12,12v158

                                    C153,185.6,147.6,191,141,191z"></path>

                                <rect x="58.6" y="20.3" class="icm-st1" width="82.8" height="134.8"></rect>

                                <polygon class="icm-st2" points="58.6,155.1 58.6,20.3 141.4,20.3 	"></polygon>

                                <g class="pulse-ring-wrapper">

                                    <g class="pulse-ring">

                                        <path class="icm-st3" d="M100,101c7.2,0,13-5.8,13-13c0-7.2-5.8-13-13-13s-13,5.8-13,13C87,95.2,92.8,101,100,101"></path>

                                    </g>

                                </g>	

                                <g>

                                    <path class="icm-st4" d="M100,104.3c9.2,0,16.6-7.4,16.6-16.6s-7.4-16.6-16.6-16.6s-16.6,7.4-16.6,16.6S90.8,104.3,100,104.3"></path>

                                    <path class="icm-st0" d="M97.8,89.6c0,0.3-0.1,0.6-0.3,0.9c-0.2,0.3-0.6,0.4-1.2,0.4h-1.9v-2.6h1.9c0.6,0,1,0.2,1.2,0.4

                                        C97.6,88.9,97.8,89.2,97.8,89.6 M96.9,85.6c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.3-1,0.3h-1.3v-2.1h1.3c0.6,0,0.8,0.1,1,0.3

                                        C96.8,85.1,96.9,85.3,96.9,85.6 M98.2,87.1c0.3-0.3,0.6-1,0.6-1.6c0-0.8-0.4-1.5-0.9-1.9c-0.5-0.4-1.1-0.7-2.2-0.7h-3.3v9.6h3.8

                                        c1.2,0,2-0.3,2.5-0.9c0.5-0.5,0.9-1.3,0.9-2.1C99.6,88.5,99,87.5,98.2,87.1"></path>

                                    <path class="icm-st0" d="M106.7,89.7c0,0.6-0.2,1.1-0.6,1.5c-0.4,0.4-0.9,0.6-1.7,0.6h-2.6v-4.1h2.6c0.8,0,1.3,0.2,1.7,0.6

                                        C106.5,88.6,106.7,89.1,106.7,89.7 M105.5,86.3c-0.3,0.3-0.7,0.5-1.4,0.5h-2.3v-3.1h2.3c0.7,0,1.1,0.2,1.4,0.5

                                        c0.3,0.3,0.4,0.6,0.4,1.1C105.9,85.7,105.7,86,105.5,86.3 M105.8,87.1c0.5-0.4,0.9-1.1,0.9-1.8c0-0.7-0.3-1.3-0.7-1.7

                                        c-0.4-0.4-1-0.6-1.9-0.6h-3.1v9.6h3.5c1,0,1.7-0.3,2.2-0.7c0.6-0.5,0.9-1.3,0.9-2.1C107.5,88.5,106.8,87.5,105.8,87.1"></path>

                                </g>

                                <path class="icm-st2" d="M100,182.5c5.5,0,9.9-4.4,9.9-9.9s-4.4-9.9-9.9-9.9c-5.5,0-9.9,4.4-9.9,9.9S94.5,182.5,100,182.5"></path>

                            </g>

                        </svg>

                    </div>

                </div>

                <div class="col-md-3 contact-us-thumbnail bg1">

                    <div class="contact-us-text">

                        <h6>email</h6>

                        <h6>taditya.tiwari007@gmail.com</h6>

                    </div>

                    <div class="contact-us-image">

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">

                            <style type="text/css">

                                .ce-st0{fill:#FFFFFF;}

                                .ce-st1{clip-path:url(#SVGID_2_);}

                                .ce-st2{fill:#595A5C;}

                                .ce-st3{fill:#EB654A;}

                                .ce-st4{fill:#B2B3B5;}

                                .ce-st5{fill:#D2D3D4;}

                            </style>

                            <g>

                                <rect x="7.5" y="72.5" class="ce-st0" width="185" height="114.1"></rect>

                                <g>

                                    <defs>

                                        <rect id="SVGID_1_" x="7.5" y="72.5" width="185" height="114.1"></rect>

                                    </defs>

                                    <clipPath id="SVGID_2_">

                                        <use xlink:href="#SVGID_1_" style="overflow:visible;"></use>

                                    </clipPath>

                                    <g class="ce-st1">

                                        <polygon class="ce-st2 envelope-stripe" points="18.7,145.7 -72.2,176.7 -69.3,185.3 18.7,155.3 			"></polygon>

                                        <polygon class="ce-st3 envelope-stripe" points="18.7,132.1 -76.4,164.5 -73.4,173.1 18.7,141.7 			"></polygon>

                                        <polygon class="ce-st2 envelope-stripe" points="18.7,118.5 -80.5,152.3 -77.6,160.9 18.7,128.1 			"></polygon>

                                        <polygon class="ce-st3 envelope-stripe" points="18.7,104.9 -84.7,140.2 -81.8,148.8 18.7,114.5 			"></polygon>

                                    </g>

                                </g>

                                <polygon class="ce-st4" points="100,125.3 100,125.3 7.5,72.5 192.5,72.5 	"></polygon>

                                <polygon class="ce-st5" points="100,13.4 100,13.4 192.5,72.5 7.5,72.5 	"></polygon>

                                <polygon class="ce-st5" points="100,121.4 12,72.5 7.5,72.5 100,125.3 192.5,72.5 188,72.5 	"></polygon>

                                <path class="ce-st3" d="M167.1,175.7c8.2,0,14.8-6.6,14.8-14.8s-6.6-14.8-14.8-14.8c-8.2,0-14.8,6.6-14.8,14.8

                                    S158.9,175.7,167.1,175.7"></path>

                                <path class="ce-st0" d="M165.1,162.5c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.4-1.1,0.4H162v-2.3h1.7c0.6,0,0.9,0.1,1.1,0.4

                                    C165,162,165.1,162.2,165.1,162.5 M164.4,159c0,0.2-0.1,0.5-0.2,0.6c-0.2,0.2-0.4,0.3-0.9,0.3H162v-1.8h1.2c0.5,0,0.7,0.1,0.9,0.3

                                    C164.3,158.5,164.4,158.8,164.4,159 M165.5,160.4c0.3-0.3,0.6-0.9,0.6-1.4c0-0.7-0.3-1.3-0.8-1.7c-0.4-0.4-1-0.6-1.9-0.6h-2.9v8.6

                                    h3.3c1.1,0,1.8-0.3,2.2-0.8c0.5-0.5,0.8-1.1,0.8-1.8C166.7,161.6,166.2,160.7,165.5,160.4"></path>

                                <path class="ce-st0" d="M173.1,162.6c0,0.5-0.2,1-0.6,1.3c-0.3,0.3-0.8,0.5-1.5,0.5h-2.3v-3.7h2.3c0.7,0,1.2,0.2,1.5,0.5

                                    C172.9,161.6,173.1,162.1,173.1,162.6 M172,159.6c-0.3,0.3-0.6,0.5-1.3,0.5h-2v-2.8h2c0.6,0,1,0.2,1.3,0.5c0.2,0.2,0.4,0.6,0.4,0.9

                                    C172.3,159.1,172.2,159.4,172,159.6 M172.3,160.3c0.5-0.4,0.8-1,0.8-1.6c0-0.6-0.3-1.1-0.7-1.5c-0.4-0.4-0.9-0.6-1.7-0.6h-2.8v8.6

                                    h3.1c0.9,0,1.5-0.2,1.9-0.6c0.5-0.5,0.8-1.1,0.8-1.9C173.8,161.6,173.2,160.7,172.3,160.3"></path>

                            </g>

                        </svg>

                    </div>

                </div>

                <div class="col-md-3 contact-us-thumbnail bg2">

                    <div class="contact-us-text">

                        <h6>address</h6>

                        <h6>Mumbai, India.</h6>

                    </div>

                    <div class="contact-us-image">

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">

                            <style type="text/css">

                                .cmp-st0{fill:#595A5C;}

                                .cmp-st1{fill:#505354;}

                                .cmp-st1-2{fill:#c1533e;}

                                .cmp-st2{fill:#EB654A;}

                                .cmp-st3{fill:#FFFFFF;}

                            </style>

                            <g>

                                <path class="cmp-st0" d="M100,16c-29,0-52.5,23.5-52.5,52.5C47.5,118.6,100,184,100,184s52.5-65.4,52.5-115.5C152.5,39.5,129,16,100,16

                                    z"></path>

                                <path class="cmp-st1" d="M100,16c-0.2,0-0.4,0-0.7,0v167.1c0.4,0.6,0.7,0.8,0.7,0.8s52.5-65.4,52.5-115.5C152.5,39.5,129,16,100,16z"></path>

                                <path class="cmp-st2" d="M100,97.5c15.7,0,28.3-12.7,28.3-28.3S115.7,40.8,100,40.8S71.6,53.5,71.6,69.1S84.3,97.5,100,97.5"></path>

                                <path class="cmp-st1-2" d="M74.7,69.1c0-15.2,11.9-27.5,26.8-28.3c-0.5,0-1,0-1.5,0c-15.7,0-28.4,12.7-28.4,28.4S84.3,97.5,100,97.5

                                    c0.5,0,1,0,1.5,0C86.5,96.7,74.7,84.3,74.7,69.1z"></path>

                                <path class="cmp-st3" d="M96.2,72.3c0,0.6-0.2,1.1-0.6,1.5c-0.4,0.4-1,0.7-2.1,0.7h-3.2v-4.5h3.2c1.1,0,1.7,0.3,2.1,0.7

                                    C96,71.2,96.2,71.7,96.2,72.3 M94.8,65.5c0,0.4-0.2,0.9-0.5,1.2c-0.3,0.4-0.8,0.6-1.8,0.6h-2.2v-3.5h2.2c1,0,1.4,0.2,1.8,0.6

                                    C94.6,64.6,94.8,65.1,94.8,65.5 M96.9,68.1c0.5-0.6,1.1-1.7,1.1-2.7c0-1.3-0.6-2.5-1.5-3.3c-0.8-0.7-1.8-1.1-3.7-1.1h-5.6v16.4h6.4

                                    c2.1,0,3.4-0.6,4.3-1.5c0.9-0.9,1.5-2.2,1.5-3.5C99.3,70.5,98.3,68.8,96.9,68.1"></path>

                                <path class="cmp-st3" d="M111.4,72.5c0,1-0.4,1.9-1.1,2.5c-0.6,0.6-1.5,1-2.9,1H103v-7h4.4c1.4,0,2.3,0.4,2.9,1

                                    C111,70.6,111.4,71.5,111.4,72.5 M109.3,66.7c-0.5,0.5-1.2,0.9-2.4,0.9H103v-5.3h3.9c1.2,0,1.9,0.4,2.4,0.9

                                    c0.4,0.5,0.7,1.1,0.7,1.8C110,65.6,109.8,66.3,109.3,66.7 M110,68c0.9-0.7,1.5-1.9,1.5-3.1c0-1.1-0.5-2.2-1.3-2.9

                                    c-0.7-0.7-1.7-1.1-3.2-1.1h-5.4v16.4h5.9c1.7,0,2.9-0.5,3.7-1.2c1-0.9,1.6-2.2,1.6-3.6C112.8,70.5,111.7,68.8,110,68"></path>

                            </g>

                        </svg>

                    </div>

                </div>                

            </div>

            <!--contact us ends-->

            <!--these svg icons are copied-->

            <!--these svg icons are copied--> 



            <!--footer starts-->

            <div class="row">

                <div class="col-md-12 footer">

                    <div class="footer-text">

                        <h4 class="text-center">Designed and developed with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="http://codepen.io/AdityaTiwari/" target="_blank">Aditya Tiwari.</a></h4>

                        <h5 class="text-center">To know more about Ashoka - the Great, please <a href="https://en.wikipedia.org/wiki/Ashoka" target="_blank">click here.</a></h5>

                    </div>

                    <div class="footer-icons text-center">

                        <ul>

                            <li>

                                <a href="https://www.facebook.com/taditya.tiwari007" target="_blank">

                                    <i class="fa fa-facebook-square fa-3x va" aria-hidden="true"></i>

                                </a>

                            </li>

                            <li>

                                <a href="https://www.linkedin.com/in/aditya-tiwari-771475123/" target="_blank">

                                    <i class="fa fa-linkedin-square fa-3x va" aria-hidden="true"></i>

                                </a>

                            </li>

                            <!--<li>

                                <a href="https://www.instagram.com/insta_akku94/" target="_blank">

                                   <i class="fa fa-instagram fa-3x va" aria-hidden="true"></i>

                                </a>

                            </li>

                            <li>

                                <a href="https://twitter.com/aakriti_1012" target="_blank">

                                    <i class="fa fa-twitter-square fa-3x va" aria-hidden="true"></i>

                                </a>

                            </li>-->

                            <li>

                                <a href="https://github.com/adityatiwari2102" target="_blank">

                                    <i class="fa fa-github-square fa-3x va" aria-hidden="true"></i>

                                </a>

                            </li>

                            <li>

                                <a href="http://codepen.io/AdityaTiwari/" target="_blank">

                                    <i class="fa fa-codepen fa-3x va" aria-hidden="true"></i>

                                </a>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>

            <!--footer ends-->

        </div>



    <!-- jQuery library (served from Google) -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <script src="script.js"></script>

    </body>

</html>
