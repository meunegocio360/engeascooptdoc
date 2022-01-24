(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"start":"this.playAudioList([this.audio_A8CFDCF3_8BC6_D40F_41B6_69930FA2B378], true); this.init()","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"desktopMipmappingEnabled":false,"class":"Player","minWidth":20,"shadow":false,"scrollBarVisible":"rollOver","width":"100%","borderRadius":0,"gap":10,"overflow":"hidden","propagateClick":false,"vrPolyfillScale":0.75,"scrollBarColor":"#000000","definitions": [{"displayOriginPosition":{"hfov":165,"yaw":-153.15,"class":"RotationalCameraDisplayPosition","pitch":-90,"stereographicFactor":1},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_AA86B5FF_8BCB_F7F7_41CC_AD03A18C1F1D","initialPosition":{"yaw":-153.15,"class":"PanoramaCameraPosition","pitch":-36.13},"hoverFactor":0,"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement","easing":"linear"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","targetPitch":-36.13,"targetStereographicFactor":0}],"id":"panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_camera"},{"data":{"label":"Rodrigo COrtada"},"autoplay":true,"loop":false,"audio":{"mp3Url":"media/audio_A8CFDCF3_8BC6_D40F_41B6_69930FA2B378.mp3","class":"AudioResource","oggUrl":"media/audio_A8CFDCF3_8BC6_D40F_41B6_69930FA2B378.ogg"},"class":"MediaAudio","id":"audio_A8CFDCF3_8BC6_D40F_41B6_69930FA2B378"},{"thumbnailUrl":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_t.jpg","adjacentPanoramas":[{"distance":100,"yaw":89.48,"select":"this.overlay_AB9CB08D_8BCE_4C1B_41D1_35FE674F0FD1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_AB9CB08D_8BCE_4C1B_41D1_35FE674F0FD1"},"panorama":"this.panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151","class":"AdjacentPanorama"}],"class":"Panorama","overlays":["this.overlay_AB9CB08D_8BCE_4C1B_41D1_35FE674F0FD1"],"hfov":360,"hfovMax":130,"partial":false,"pitch":0,"id":"panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D","hfovMin":"135%","label":trans('panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_t.jpg","cube":{"levels":[{"width":15360,"rowCount":5,"url":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_0/{face}/0/{row}_{column}.jpg","height":2560,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":30},{"width":9216,"rowCount":3,"url":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_0/{face}/1/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"Fachada"}},{"class":"PlayList","items":["this.PanoramaPlayListItem_A9AC1F02_8B5E_5409_41DE_E74FA3FADC7B","this.PanoramaPlayListItem_A9AC2F02_8B5E_5409_41AC_06DEA9B24679"],"id":"mainPlayList"},{"thumbnailUrl":"media/panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_t.jpg","adjacentPanoramas":[{"distance":1.66,"yaw":-151.66,"select":"this.overlay_ABBFBA5A_8BCF_BC39_41E0_E23A53C55F34.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_ABBFBA5A_8BCF_BC39_41E0_E23A53C55F34"},"panorama":"this.panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D","class":"AdjacentPanorama"}],"class":"Panorama","overlays":["this.overlay_ABBFBA5A_8BCF_BC39_41E0_E23A53C55F34"],"hfov":360,"hfovMax":130,"partial":false,"pitch":0,"id":"panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151","hfovMin":"150%","label":trans('panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_t.jpg","cube":{"levels":[{"width":9216,"rowCount":3,"url":"media/panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_0/{face}/0/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"width":6144,"rowCount":2,"url":"media/panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"drone"}},{"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","aaEnabled":true,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer"},{"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_AA98B01D_8BCA_4C3B_41BE_20AD713D609C","initialPosition":{"yaw":-80.82,"class":"PanoramaCameraPosition","pitch":25.69},"hoverFactor":0,"id":"panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_camera"},{"label":trans('Button_ABEA10FA_8BCA_CDF9_41D4_7C88CC92F8F3.label'),"backgroundColorDirection":"vertical","fontWeight":"bold","backgroundColorRatios":[0],"right":"0%","class":"Button","minWidth":1,"shadow":false,"shadowBlurRadius":15,"borderRadius":0,"shadowSpread":1,"rollOverShadow":false,"propagateClick":false,"cursor":"hand","width":"100%","shadowColor":"#000000","paddingTop":0,"textDecoration":"none","gap":5,"paddingBottom":0,"id":"Button_ABEA10FA_8BCA_CDF9_41D4_7C88CC92F8F3","fontFamily":"Montserrat","horizontalAlign":"center","pressedBackgroundColor":["#333333"],"data":{"name":"Button house info"},"paddingLeft":0,"bottom":"0.33%","paddingRight":0,"fontColor":"#FFFFFF","pressedBackgroundOpacity":1,"height":40.05,"rollOverBackgroundColor":["#BBD149"],"verticalAlign":"middle","backgroundColor":["#003300"],"rollOverBackgroundColorRatios":[0],"iconHeight":0,"iconWidth":0,"fontSize":"19px","borderColor":"#000000","iconBeforeLabel":true,"toolTipHorizontalAlign":"center","mode":"push","click":"this.openLink(this.translate('LinkBehaviour_A87784B0_8BC6_5409_41D2_F97AF00D8CF3.source'), '_blank')","backgroundOpacity":0.78,"pressedBackgroundColorRatios":[0],"borderSize":0,"fontStyle":"normal","layout":"horizontal","minHeight":1,"rollOverBackgroundOpacity":0.8},{"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowSpread":0,"toolTipFontWeight":"normal","class":"ViewerArea","minWidth":100,"progressBackgroundOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadShadowBlurRadius":3,"displayTooltipInSurfaceSelection":true,"playbackBarBackgroundColorDirection":"vertical","subtitlesPaddingTop":5,"translationTransitionDuration":1000,"width":"100%","data":{"name":"Main Viewer"},"subtitlesBorderColor":"#FFFFFF","propagateClick":false,"toolTipPaddingBottom":4,"subtitlesTop":0,"subtitlesTextShadowBlurRadius":0,"playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressLeft":0,"vrPointerSelectionTime":2000,"toolTipTextShadowBlurRadius":3,"playbackBarLeft":0,"id":"MainViewer","toolTipPaddingRight":6,"subtitlesPaddingRight":5,"subtitlesFontWeight":"normal","playbackBarHeadHeight":15,"toolTipShadowBlurRadius":3,"progressBorderRadius":0,"playbackBarBottom":5,"transitionDuration":500,"playbackBarRight":0,"toolTipShadowColor":"#333333","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","displayTooltipInTouchScreens":true,"vrPointerColor":"#FFFFFF","transitionMode":"blending","toolTipHorizontalAlign":"center","subtitlesTextShadowColor":"#000000","height":"100%","toolTipBorderRadius":3,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontStyle":"normal","subtitlesHorizontalAlign":"center","borderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowHorizontalLength":0,"toolTipFontFamily":"Arial","toolTipTextShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"shadow":false,"subtitlesBorderSize":0,"borderRadius":0,"progressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"playbackBarHeadBorderSize":0,"paddingTop":0,"playbackBarHeadShadow":true,"playbackBarBackgroundOpacity":1,"progressRight":0,"progressBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressOpacity":1,"toolTipShadowVerticalLength":0,"paddingBottom":0,"playbackBarBorderRadius":0,"doubleClickAction":"toggle_fullscreen","subtitlesTextDecoration":"none","playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","paddingLeft":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadOpacity":1,"subtitlesFontFamily":"Arial","subtitlesEnabled":true,"toolTipDisplayTime":600,"surfaceReticleOpacity":0.6,"subtitlesTextShadowHorizontalLength":1,"toolTipOpacity":1,"progressBorderColor":"#000000","paddingRight":0,"subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"subtitlesPaddingBottom":5,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#FFFFFF"],"subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","subtitlesOpacity":1,"progressBottom":0,"surfaceReticleSelectionOpacity":1,"subtitlesShadow":false,"progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderRadius":0,"playbackBarHeadWidth":6,"firstTransitionDuration":0,"progressHeight":10,"progressBarBorderRadius":0,"subtitlesPaddingLeft":5,"progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressBarBorderSize":0,"toolTipPaddingTop":4,"playbackBarProgressOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarOpacity":1,"playbackBarHeadBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesBottom":50,"minHeight":50,"toolTipShadowOpacity":1,"subtitlesGap":0,"toolTipBorderSize":1},{"class":"PlayerMenuItem","label":"@meunegocioweb360","id":"TDVAuthor"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AA86B5FF_8BCB_F7F7_41CC_AD03A18C1F1D"},{"maps":[],"items":[{"distance":100,"yaw":89.48,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":35.42,"hfov":30.12,"data":{"label":"Arrow 06b"},"roll":0.88,"verticalAlign":"middle","image":"this.AnimatedImageResource_A9A91E3A_8B5E_5479_41DF_F4384B0919B1","pitch":37.77,"scaleMode":"fit_inside"}],"data":{"label":"Arrow 06b"},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_AB93808D_8BCE_4C1B_41DE_3D51C937F4FE"],"id":"overlay_AB9CB08D_8BCE_4C1B_41D1_35FE674F0FD1"},{"camera":"this.panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151_camera","media":"this.panorama_ABE68FA0_8BCB_D409_41CD_7B4770324151","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_A9AC1F02_8B5E_5409_41DE_E74FA3FADC7B"},{"camera":"this.panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D_camera","media":"this.panorama_A801D57C_8BCA_54F9_41CD_DA348425A95D","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_A9AC2F02_8B5E_5409_41AC_06DEA9B24679"},{"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 06b","hasPanoramaAction":true},"useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-151.66,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6.94,"hfov":12.56,"data":{"label":"Arrow 06b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_A9A9DE3A_8B5E_5479_41E1_4E34DBB8DBD7","pitch":-45.68,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_AB894A5D_8BCF_BC3B_41DF_B19F75E9CA12"],"id":"overlay_ABBFBA5A_8BCF_BC39_41E0_E23A53C55F34"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AA98B01D_8BCA_4C3B_41BE_20AD713D609C"},{"frameDuration":41,"frameCount":24,"rowCount":6,"colCount":4,"levels":[{"height":360,"width":480,"class":"ImageResourceLevel","url":"media/res_AE18E469_8BDE_541B_41D8_16140E38119E_0.png"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_A9A91E3A_8B5E_5479_41DF_F4384B0919B1"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A9AC1F02_8B5E_5409_41DE_E74FA3FADC7B, -152.3076923076923, -36.35849731663685, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_AB93808D_8BCE_4C1B_41DE_3D51C937F4FE"},{"frameDuration":41,"frameCount":24,"rowCount":6,"colCount":4,"levels":[{"height":360,"width":480,"class":"ImageResourceLevel","url":"media/res_AE18E469_8BDE_541B_41D8_16140E38119E_0.png"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_A9A9DE3A_8B5E_5479_41E1_4E34DBB8DBD7"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A9AC2F02_8B5E_5409_41AC_06DEA9B24679, -74.76923076923076, 39.013237924865834, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_AB894A5D_8BCF_BC3B_41DF_B19F75E9CA12"}],"paddingTop":0,"mobileMipmappingEnabled":false,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"minHeight":20,"horizontalAlign":"left","data":{"name":"Player33527","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"paddingLeft":0,"scrollBarWidth":10,"paddingRight":0,"children":["this.MainViewer","this.Button_ABEA10FA_8BCA_CDF9_41D4_7C88CC92F8F3"],"height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"layout":"absolute","scripts":{"getMainViewer":TDV.Tour.Script.getMainViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"translate":TDV.Tour.Script.translate,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizShowScore":TDV.Tour.Script.quizShowScore,"openLink":TDV.Tour.Script.openLink,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"clone":TDV.Tour.Script.clone,"getMediaByName":TDV.Tour.Script.getMediaByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"init":TDV.Tour.Script.init,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupImage":TDV.Tour.Script.showPopupImage,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setValue":TDV.Tour.Script.setValue,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getKey":TDV.Tour.Script.getKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizFinish":TDV.Tour.Script.quizFinish,"isPanorama":TDV.Tour.Script.isPanorama,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizStart":TDV.Tour.Script.quizStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showWindow":TDV.Tour.Script.showWindow,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPixels":TDV.Tour.Script.getPixels,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"downloadFile":TDV.Tour.Script.downloadFile,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"initQuiz":TDV.Tour.Script.initQuiz},"toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"backgroundPreloadEnabled":true,"menu":["this.TDVAuthor"],"left":556.65,"backgroundOpacity":1,"downloadEnabled":false,"mediaActivationMode":"window","borderSize":0,"contentOpaque":false};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.26.js.map
//Generated with v2021.2.26, Mon Jan 24 2022