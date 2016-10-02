chatterbox = (function () {
    var protocolToUse = (location.protocol == "https:") ? "https://" : "http://";
    //switch url for live or testing environment
    var tdlDomain = "http://www.touchdownloyal.com/";
    var tdlPartnerDomain = "http://www.mytouchdownzone.com/";
    //end switch
    var referrer = document.referrer;
    if (referrer.match(/football/g)) {
        tdlPartnerDomain = protocolToUse + referrer.split('/')[2] + "/";
    }

    // Declare variables
    var event = '';
    var domain, remnant, league;
    var temp = location.search;
    var query = {};
    var target;
    var href;
    var selectedTab;
    var dataArray = [];
    var imageArray = [];
    var isTabCovered = false;

    if (temp != null) {
        query = JSON.parse(decodeURIComponent(temp.substr(1)));
        domain = query.dom;
        remnant = query.remn;
        league = query.league;
        target = query.targ;

        if (remnant == 'true') {
            href = tdlDomain;
            $("base").attr("href", tdlDomain);
        } else if (referrer.match(/football/g)) {
            $("base").attr("href", tdlPartnerDomain);
            href = tdlPartnerDomain;
        } else {
            $("base").attr("href", tdlPartnerDomain + domain + "/");
            href = tdlPartnerDomain + domain + "/";
        }

    }

    //adjust api url for testing or live
    var APIUrl = protocolToUse + 'prod-touchdownloyal-ai.synapsys.us/sidekick/' + league,
        tcxData = {},
        tcxId = -1,
        pageInd = -1,
        availPages = [];

    function getContent(eventId) {
        // Clear old data
        if (tcxId != -1) {
            availPages = [];
            pageInd = -1;
            $('.cb-title')[0].innerHTML = "Loading...";
            $('.cb-txt')[0].innerHTML = '';
        }
        var locApiUrl = APIUrl;
        if (typeof eventId != "undefined") {
            locApiUrl += "/" + eventId;
            event = eventId;
        }
        $.ajax({
            url: locApiUrl,
            success: function (data) {
                tcxData = data;
                processData();
            },
            error: function (jqXHR, status, error) {
                console.log(jqXHR, status, error);
                displayError('Error Loading Sports API: ' + status);
            },
            dataType: 'json'
        });
    } // --> getContent

    function displayError(errorMsg) {
        $('.cb-txt')[0].innerHTML = errorMsg;
    } // --> displayError

    function getData() {
        return tcxData;
    } // --> getData

    function displayPage() {
        var containerWidth = $('.cb').width() - 60;
        if (containerWidth <= 440) {
            isTabCovered = true;
        } else {
            isTabCovered = false;
        }
        //setup tabs
        setTabs();
        createDropdown();
        // Check for data
        if (pageInd == -1 || tcxId == -1 || typeof availPages[pageInd] == "undefined") {
            return console.log('Invalid page or game ID', pageInd, tcxId);
        }
        // Get the data
        var pageID = availPages[pageInd];
        var dataArr = [];
        $.map(dataArray, function (val) {
            if (val[0] == pageID) {
                val.title = val[1].displayHeadline;
                val.report = val[1].article;
                val.eventId = tcxData['data']['meta-data']['current'].eventID;
                val.articleImage = val[1].image;
                var keyword = val[0].replace(/-/g, " ");
                val.keyword = keyword.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
                val.index = val[0];
                dataArr.push(val);
            }
        });
        // configure the data
        var id = dataArr[0][0] != "player-fantasy" ? dataArr[0].eventId : dataArr[0][1].articleId;
        var arr = {
            keyword: dataArr[0].keyword,
            date: dataArr[0][1].dateline.replace(/ /g, "/").replace(/,/g, "/").replace("//", "/"),
            title: dataArr[0][1].displayHeadline,
            url: href + league + '/articles/' + dataArr[0][0] + '/' + id,
            content: dataArr[0].report + '<br>&nbsp; ',
            img: protocolToUse + 'images.synapsys.us' + dataArr[0].articleImage,
            icon: '../css/public/Icon_Football.png'
        };
        // Set the data
        $('.cb-title')[0].innerHTML = arr.title;
        $('.cb-keyword')[0].innerHTML = arr.keyword;
        $('.cb-date')[0].innerHTML = arr.date;
        $('#ai-link').attr('href', arr.url);
        $('#ai-link').attr('target', target);
        $('.cb-txt')[0].innerHTML = arr.content;
        $('.cb-img').css('background-image', 'url(' + arr.img + ')');
        $('.tcx').css('background-image', 'url(../css/public/icons/TCX_Logo_Outlined.svg)');
    } // --> displayPage

    //Populates 3 images above main chatterbox
    function setTriImage() {
        for (var i = 0; i < imageArray.length; i++) {
            var imageContainerLarge = document.createElement('div');
            var imageContainerSmall = document.createElement('div');
            var imageLarge = document.createElement('img');
            var imageSmall = document.createElement('img');
            var titleContainerLarge = document.createElement('div');
            var titleContainerSmall = document.createElement('div');
            var titleLarge = document.createElement('div');
            var titleSmall = document.createElement('div');
            titleContainerLarge.className = 'col-sm-4 visible-sm visible-md visible-lg tri-title-container';
            titleContainerSmall.className = 'col-sm-12 visible-xs tri-title-container-stack';
            imageContainerLarge.className = 'col-xs-12 col-sm-4 visible-sm visible-md visible-lg embed-responsive embed-responsive-16by9-sub tri-image-container';
            imageContainerSmall.className = 'col-xs-12 col-sm-4 visible-xs embed-responsive embed-responsive-16by9-triple-stack tri-image-container';
            if (i == 0) {
                imageLarge.className = 'embed-responsive-item tri-image left';
                titleLarge.className = 'col-sm-11 tri-title left';
            } else if (i == 2) {
                imageLarge.className = 'embed-responsive-item tri-image right';
                titleLarge.className = 'col-sm-11 tri-title right';
            } else {
                imageLarge.className = 'embed-responsive-item tri-image center';
                titleLarge.className = 'col-sm-11 tri-title center';
            }
            imageSmall.className = 'embed-responsive-item tri-image';
            titleSmall.className = 'col-sm-11 tri-title';
            $('.image-row')[0].appendChild(imageContainerLarge);
            $('.triple-stack')[0].appendChild(imageContainerSmall);
            imageContainerLarge.appendChild(imageLarge);
            imageContainerSmall.appendChild(imageSmall);
            $('.title-row')[0].appendChild(titleContainerLarge);
            $('.triple-stack')[0].appendChild(titleContainerSmall);
            titleContainerLarge.appendChild(titleLarge);
            titleContainerSmall.appendChild(titleSmall);
            imageLarge.src = protocolToUse + 'images.synapsys.us' + imageArray[i][1].image;
            imageSmall.src = protocolToUse + 'images.synapsys.us' + imageArray[i][1].image;
            titleLarge.innerHTML = imageArray[i][1].displayHeadline;
            titleSmall.innerHTML = imageArray[i][1].displayHeadline;
            $(imageContainerLarge).wrapInner($('<a href="' + href + league + '/articles/' + imageArray[i][0] + "/" + imageArray[i][1].articleId + '" />'));
            $(titleContainerLarge).wrapInner($('<a href="' + href + league + '/articles/' + imageArray[i][0] + "/" + imageArray[i][1].articleId + '" />'));
            $(imageContainerSmall).wrapInner($('<a href="' + href + league + '/articles/' + imageArray[i][0] + "/" + imageArray[i][1].articleId + '" />'));
            $(titleContainerSmall).wrapInner($('<a href="' + href + league + '/articles/' + imageArray[i][0] + "/" + imageArray[i][1].articleId + '" />'));
        }
    }

    //Tab setup
    function setTabs() {
        var tabNames = [
            "Trending",
            "Entertainment",
            "Sports",
            "Politics",
            "Automotive"
        ];
        var tabContainer = document.createElement('div');
        tabContainer.className = 'tab-container';
        if (selectedTab == undefined) {
            selectedTab = tabNames[0];
        }
        if (!isTabCovered) {
            for (var i = 0; i < tabNames.length; i++) {
                var tabContent = document.createElement('div');
                if (selectedTab == undefined && i == 0) {
                    tabContent.className = 'tab-content active';
                    tabContent.addEventListener('click', tabSelect, false);
                } else if (tabNames[i] == selectedTab) {
                    tabContent.className = 'tab-content active';
                    tabContent.addEventListener('click', tabSelect, false);
                } else {
                    tabContent.className = 'tab-content';
                    tabContent.addEventListener('click', tabSelect, false);
                }
                tabContainer.appendChild(tabContent);
                tabContent.innerHTML = tabNames[i];
            }
            $('.cb-header')[0].appendChild(tabContainer);
        } else {
            for (var j = 0; j < tabNames.length; j++) {
                if (tabNames[j] == selectedTab) {
                    var tabContent = document.createElement('div');
                    tabContent.className = 'tab-content tab-content-drop active';
                    tabContainer.appendChild(tabContent);
                    tabContent.innerHTML = '<i class="fa fa-caret-up"></i>' + tabNames[j];
                    $('.cb-header')[0].appendChild(tabContainer);
                }
            }
        }
    }

    //onclick event to change tabs
    function tabSelect(event) {
        var target = event.target || event.srcElement;
        selectedTab = target.innerHTML;
        $('.tab-content').remove();
        setTabs();
        createDropdown();
    }

    function createDropdown() {
        var tabNames = [
            "Trending",
            "Entertainment",
            "Sports",
            "Politics",
            "Automotive"
        ];
        if (selectedTab == undefined) {
            selectedTab = tabNames[0];
        }
        var ddStr = '';
        var count = 0;
        for (var i = 0; i < tabNames.length; i++) {
            if (i == 0) {
                ddStr += '<div class="visible-xs arrow-up"></div>';
            }
            if (i > 0 && i < tabNames.length) {
                ddStr += '<div class="col-xs-11 visible-xs divider"></div>';
            }
            if (tabNames[i] != selectedTab) {
                if (count == 0) {
                    ddStr += '<div class="visible-xs dropdown-item first-elem">' + tabNames[i] + '</div>';
                    $('.cb-dropdown')[0].addEventListener('click', tabSelect, false);
                    count++;
                } else {
                    ddStr += '<div class="visible-xs dropdown-item">' + tabNames[i] + '</div>';
                    $('.cb-dropdown')[0].addEventListener('click', tabSelect, false);
                }
            }
        }
        $('.cb-dropdown')[0].innerHTML = ddStr;
    }

    // Toggle the dropdown
    function toggleDropDown() {
        if (isTabCovered) {
            var cbDropdown = $('.tab-container');
            var cbDropdownDisplay = $('.cb-dropdown');
            if (cbDropdownDisplay.hasClass('active')) {
                cbDropdownDisplay.removeClass('active');
                cbDropdown.find('.fa').removeClass('fa-caret-down').addClass('fa-caret-up');
            } else {
                cbDropdownDisplay.addClass('active');
                cbDropdown.find('.fa').addClass('fa-caret-down').removeClass('fa-caret-up');
            }
        }
    } // --> toggleDropDown

    function nextPage() {
        // Exit if no pages
        if (pageInd == -1 || availPages.length == 0) {
            return false;
        }
        // Create new pageInd
        pageInd++;
        if (pageInd >= availPages.length) {
            pageInd = 0;
        }
        // Create page
        displayPage();
    } // --> npextPage

    function prevPage() {
        // Exit if no pages
        if (pageInd == -1 || availPages.length == 0) {
            return false;
        }
        // Create new pageInd
        pageInd--;
        if (pageInd <= -1) {
            pageInd = availPages.length - 1;
        }
        // Create page
        displayPage();
    } // --> prevPage

// **** PARSING FUNCTION ****
    function processData() {
        // Check for data
        if (typeof tcxData != "object") {
            return displayError('Invalid YSEOP Response');
        }
        //Function takes array, removes 3 random elements from array, and cuts the 3 random elements from the main array
        Array.prototype.getRandomArt = function (number, cutIndex) {
            var index = cutIndex ? this : this.slice(0);
            index.sort(function () {
                return .5 - Math.random();
            });
            return index.splice(0, number);
        };
        //Converts object into array
        dataArray = Object.keys(tcxData['data']).map(function (val) {
            if (val != 'meta-data' && val != 'timestamp') {
                return [val, tcxData['data'][val]];
            }
        });
        //Filters undefined elements from array
        dataArray = dataArray.filter(function (val) {
            return val != undefined;
        });
        //Get 3 random elements from parent array
        imageArray = dataArray.getRandomArt(3, true);
        // Get all the pages
        var pages = [];
        for (var i = 0; i < dataArray.length; i++) {
            if (pages.indexOf(dataArray[i][0] > -1)) {
                availPages.push(dataArray[i][0]);
            }
        }
        pageInd = 0;
        // Get tcx Id
        tcxId = tcxData['data']['meta-data']['current'].eventID;
        displayPage();
        setTriImage();
    } // --> processData
    getContent();

    window.onresize = function (event) {
        $('.tab-content').remove();
        var containerWidth = $('.cb').width() - 60;
        if (containerWidth <= 440) {
            isTabCovered = true
        } else {
            isTabCovered = false;
            $('.cb-dropdown').removeClass('active');
        }
        setTabs();
    };

    return {
        getData: getData,
        nextPage: nextPage,
        prevPage: prevPage,
        tabSelect: tabSelect,
        toggleDropDown: toggleDropDown
    };
})
();

