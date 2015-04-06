<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset='utf-8' />

    <title>Bhumitra Nagar</title>
    <link rel="stylesheet" href="css/stylesMenu2.css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Sigmar+One" />
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="js/scriptMenu.js"></script>

    <style type="text/css">
        html body {
            background: url('images/Pictures/cool-mac-os-blue-black.jpg') no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

        p {
            text-align: justify;
            color: gold;
            font-family: Calibri;
        }

        .text {
            text-align: justify;
            color: whitesmoke;
            float: left;
            font-family: Calibri;
        }


        body {
            width: 1024px;
            max-width: 100%;
            margin: auto;
            padding: 0;
            background-color: black;
        }

        h2 {
            font-family: 'Sigmar One',"Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 44px;
            font-style: normal;
            font-variant: normal;
            font-weight: 500;
            line-height: 26.3999996185303px;
            text-align: center;
            color: floralwhite;
        }

        h1 {
            color: White;
            text-align: center;
            font-size: xx-large;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }

        .pad {
            padding: 10px;
        }


        .intro-message {
            position: relative;
            padding-top: 9%;
            padding-bottom: 9%;
        }

        .mycontainer {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
        }
    </style>

</head>

<body>

    <div class="pad">
        <form id="form1" runat="server">
            <div id='mymenu'>
                <ul>
                    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                    <li><a href="statistics/" target="_blank">Statistics</a></li>
                    <li><a href="source/" target="_blank">Source</a></li>
                    <li><a href="search/" target="_blank">Search</a></li>
                    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                    <li><a href="textview/" target="_blank">TextView</a></li>
                    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
                    <li><a href="blog/" target="_blank">Blog</a></li>
                    <li class="active"><a href="../bhumitra/story/index.htm?../experiments/story.txt" target="_blank">Experiments</a></li>
                    <li class="active"><a href="https://github.com/bhumitra/CS5610-bhumitra" target="_blank">GitHub</a></li>
                </ul>
            </div>


            <br />

            <div class="mycontainer">
                <img height="300" width="400" src="images/Pictures/me.jpg" style="border-radius: 50%; max-width: 100%; vertical-align: middle" />
                <h2>Bhumitra Nagar </h2>
            </div>

            <p class="text">
                I am a graduate student at Northeastern University pursuing Master's in Computer Science. I am building this website as a part of Web Development course CS5610. I have 3 years of experience as a senior software engineer at Infosys Ltd. where I worked as a Java application developer and an Oracle database administrator. I am looking forward to optimally utilize my computing talent in a free environment to implement ideas I always possessed but never got a chance to implement – “Ideas are no one’s property, they belong to whoever expresses them best.” That’s how Zuckerberg did it, that’s how I would do it. I am a gamer, football fan and have interest in designing and playing computer games. "Gaming might be considered a pastime; it’s a passion for me."
            </p>
            <p>
                This page is under continuous development. Check back every SUNDAY for new content.
                            You can also visit my portfolio at <a href="http://www.bhumitranagar.com">BhumitraNagar.com</a>
            </p>
            <hr />
            <hr />
            <hr />
            <footer class="text">© 2015, BhumitraNagar.com</footer>



        </form>

    </div>

</body>
</html>
