<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>  
    <meta charset='utf-8' />

    <title>Bhumitra Nagar</title>
    <link rel="stylesheet" href="css/stylenew.css" />

    <style type="text/css">
        ul.master_navigation {
            font-size: 100%;
            font-weight: bold;
            text-align: center;
            list-style: none;
            margin: 0.5em 0;
            padding: 0;
        }

            ul.master_navigation li {
                display: inline-block;
                padding: 0 0.5%;
            }

        a {
            color: #08f;
            font-weight: bold;
            text-decoration: none;
        }

            a:visited {
                color: #88f;
            }

            a:hover {
                color: #f00;
            }

        p {
            text-align: justify;
            color: darkred;
        }

        .text {
            text-align: justify;
            color: whitesmoke;
            float: left;
        }

        .mytextdiv {
            margin-top: 10px;
            margin-left: 315px;
            margin-right: auto;
            height: 275px;
            color: #494546;
        }
    </style>

    <style type="text/css" media="screen">
        body {
            width: 1024px;
            max-width: 100%;
            margin: auto;
            padding: 0;
            background-color: black;
        }

        h2 {
            color: Highlight;
            text-align: left;
        }

        .pad {
            padding: 10px;
        }
    </style>

</head>

<body>

    <div class="pad">

        <form id="form1" runat="server">

         

               <div id='menu'>
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

                
                <hr />

                <img height="300" width="400" src="images/Pictures/me.jpg" style="vertical-align: middle" />

                <h2>BHUMITRA NAGAR </h2>
                <p class="text">
                    I am a graduate student at Northeastern University pursuing Master's in Computer Science. I am building this website as a part of Web Development course CS5610. I have 3 years of experience as a senior software engineer at Infosys Ltd. where I worked as a Java application developer and an Oracle database administrator. I am looking forward to optimally utilize my computing talent in a free environment to implement ideas I always possessed but never got a chance to implement – “Ideas are no one’s property, they belong to whoever expresses them best.” That’s how Zuckerberg did it, that’s how I would do it. I am a gamer, football fan and have interest in designing and playing computer games. "Gaming might be considered a pastime; it’s a passion for me."
                </p> 
                        <p>This page is under continuous development. Check back every SUNDAY for new content.
                            You can also visit my portfolio at <a href="http://www.bhumitranagar.com">BhumitraNagar.com</a>
                        </p>
                <hr />
                <hr />
                <hr />
                <footer class="text"> © 2015, BhumitraNagar.com</footer>

            </div>

        </form>

    </div>

</body>
</html>
