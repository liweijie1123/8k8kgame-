var urlinfo = window.location.href, value = urlinfo.split("?")[1].split("=")[1]; console.log(decodeURI(value)), JSNES.DummyUI = function (e) { this.nes = e, this.enable = function () { }, this.updateStatus = function () { }, this.writeAudio = function () { }, this.writeFrame = function () { } }, "undefined" != typeof jQuery && function (r) { r.fn.JSNESUI = function (e) { function t(t) { var n = this; if (n.nes = t, n.status = r('<p class="nes-status">Booting up...</p>').appendTo(n.root), n.root = r("<div></div>"), n.screen = r('<canvas class="nes-screen" width="256" height="240"></canvas>').appendTo(n.root), n.screen[0].getContext) if (n.romSelect = r("<select></select>").appendTo(n.romContainer), n.buttons = { pause: r('<input type="button" value="暂停" class="nes-pause" disabled="disabled">').appendTo(n.controls), restart: r('<input type="button" value="重启" class="nes-restart" disabled="disabled">').appendTo(n.controls), sound: r('<input type="button" value="开启声音" class="nes-enablesound">').appendTo(n.controls), zoom: r('<input type="button" value="放大" class="nes-zoom">').appendTo(n.controls) }, n.root.appendTo(a), n.loadROM(), n.buttons.pause.click(function () { n.nes.isRunning ? (n.nes.stop(), n.updateStatus("Paused"), n.buttons.pause.attr("value", "继续")) : (n.nes.start(), n.buttons.pause.attr("value", "暂停")) }), n.buttons.restart.click(function () { n.nes.reloadRom(), n.nes.start() }), n.buttons.sound.click(function () { var e; n.nes.opts.emulateSound ? (n.nes.opts.emulateSound = !1, n.buttons.sound.attr("value", "打开声音")) : (n.nes.opts.emulateSound = !0, n.buttons.sound.attr("value", "关闭声音"), (e = n.audio.createBufferSource()).connect(n.audio.destination), e.start()) }), n.zoomed = !1, r(".nes-screen").css({ maxHeight: document.documentElement.clientHeight }), r(window).bind("resize", function () { r(".nes-screen").css({ maxHeight: document.documentElement.clientHeight }) }), /(IPHONE|IPAD|ANDROID)/i.test(navigator.userAgent) ? r("#pc-controlls").hide() : (r(".nes-zoom").hide(), r("#mobile-controlls").hide(), r(".shang").removeClass("anim_m").addClass("pc")), n.buttons.zoom.click(function () { n.zoomed ? (r("body").addClass("放大"), document.documentElement.clientHeight < screen.availHeight && r("body").css({ width: document.documentElement.clientHeight }), r(".big .nes-screen").css({ height: document.documentElement.clientWidth, width: "auto" }), n.buttons.zoom.attr("value", "放大"), n.zoomed = !0) : (n.buttons.zoom.attr("value", "缩小"), r("body").removeClass("big"), r(".nes-screen").css({ height: "auto", width: "100%", maxWidth: document.documentElement.clientWidth, maxHeight: document.documentElement.clientHeight }), r("body").css({ width: "auto" }), n.zoomed = !1) }), r.offset && n.screen.mousedown(function (e) { n.nes.mmap && (n.nes.mmap.mousePressed = !0, n.nes.mmap.mouseX = e.pageX - n.screen.offset().left, n.nes.mmap.mouseY = e.pageY - n.screen.offset().top) }).mouseup(function () { setTimeout(function () { n.nes.mmap && (n.nes.mmap.mousePressed = !1, n.nes.mmap.mouseX = 0, n.nes.mmap.mouseY = 0) }, 500) }), void 0 !== e && n.setRoms(e), n.canvasContext = n.screen[0].getContext("2d"), n.canvasContext.getImageData) { n.canvasImageData = n.canvasContext.getImageData(0, 0, 256, 240), n.resetCanvas(), r(document).bind("keydown", function (e) { n.nes.keyboard.keyDown(e) }).bind("keyup", function (e) { n.nes.keyboard.keyUp(e) }).bind("keypress", function (e) { n.nes.keyboard.keyPress(e) }), r("#controls-direction").bind("touchstart", function (e) { o(e), e.preventDefault() }), r("#controls-direction").bind("gesturestart", function (e) { o(e), e.preventDefault() }), r("#controls-direction").bind("touchmove", function (e) { o(e) }), r("#controls-direction").bind("touchend", function (e) { r("#controls-direction .left").removeClass("active"), r("#controls-direction .up").removeClass("active"), r("#controls-direction .down").removeClass("active"), r("#controls-direction .right").removeClass("active"), n.nes.keyboard.keyUp({ keyCode: 37 }), n.nes.keyboard.keyUp({ keyCode: 38 }), n.nes.keyboard.keyUp({ keyCode: 39 }), n.nes.keyboard.keyUp({ keyCode: 40 }) }), r("#joystick_btn_up").bind("touchstart", function (e) { console.log("touchstart"), n.nes.keyboard.keyDown({ keyCode: 87 }), e.preventDefault() }), r("#joystick_btn_up").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 87 }), e.preventDefault() }), r("#joystick_btn_down").bind("touchstart", function (e) { n.nes.keyboard.keyDown({ keyCode: 83 }), e.preventDefault() }), r("#joystick_btn_down").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 83 }), e.preventDefault() }), r("#joystick_btn_left").bind("touchstart", function (e) { n.nes.keyboard.keyDown({ keyCode: 65 }), e.preventDefault() }), r("#joystick_btn_left").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 65 }), e.preventDefault() }), r("#joystick_btn_right").bind("touchstart", function (e) { console.log("right"), n.nes.keyboard.keyDown({ keyCode: 68 }), e.preventDefault() }), r("#joystick_btn_right").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 68 }), e.preventDefault() }), r("#joystick_btn_A").bind("touchstart", function (e) { console.log("a"), n.nes.keyboard.keyDown({ keyCode: 74 }), e.preventDefault() }), r("#joystick_btn_A").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 74 }), e.preventDefault() }), r("#joystick_btn_B").bind("touchstart", function (e) { console.log("b"), n.nes.keyboard.keyDown({ keyCode: 75 }), e.preventDefault() }), r("#joystick_btn_B").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 75 }), e.preventDefault() }), r("#joystick_btn_select").bind("touchstart", function (e) { n.nes.keyboard.keyDown({ keyCode: 17 }), r("#joystick_btn_select").addClass("active"), e.preventDefault() }), r("#joystick_btn_select").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 17 }), r("#joystick_btn_select").removeClass("active"), e.preventDefault() }), r("#joystick_btn_start").bind("touchstart", function (e) { n.nes.keyboard.keyDown({ keyCode: 13 }), r("#joystick_btn_start").addClass("active"), e.preventDefault() }), r("#joystick_btn_start").bind("touchend", function (e) { n.nes.keyboard.keyUp({ keyCode: 13 }), r("#joystick_btn_start").removeClass("active"), e.preventDefault() }), r("#controls-fire").bind("touchstart", function (e) { s(e), e.preventDefault() }), r("#controls-fire").bind("gesturestart", function (e) { s(e, !0), e.preventDefault() }), r("#controls-fire").bind("touchmove", function (e) { s(e), e.preventDefault() }), r("#controls-fire").bind("touchend", function (e) { clearInterval(n.interval), r("#controls-fire .a").removeClass("active"), r("#controls-fire .b").removeClass("active"), n.nes.keyboard.keyUp({ keyCode: 88 }), n.nes.keyboard.keyUp({ keyCode: 90 }), e.preventDefault() }), r("#controls-turbofire").bind("touchstart", function (e) { s(e, !0), e.preventDefault() }), r("#controls-turbofire").bind("gesturestart", function (e) { s(e, !0), e.preventDefault() }), r("#controls-turbofire").bind("touchmove", function (e) { s(e, !0), e.preventDefault() }), r("#controls-turbofire").bind("touchend", function (e) { clearInterval(n.interval), r("#controls-turbofire .a").removeClass("active"), r("#controls-turbofire .b").removeClass("active"), n.nes.keyboard.keyUp({ keyCode: 88 }), n.nes.keyboard.keyUp({ keyCode: 90 }), e.preventDefault() }), window.AudioContext = window.webkitAudioContext || window.AudioContext; try { n.audio = new AudioContext } catch (e) { console.error(e), n.dynamicaudio = new DynamicAudio({ swf: t.opts.swfPath + "dynamicaudio.swf" }) } } else a.html("Your browser doesn't support writing pixels directly to the <code>&lt;canvas&gt;</code> tag. Try the latest versions of Google Chrome, Safari, Opera or Firefox!"); else a.html("Your browser doesn't support the <code>&lt;canvas&gt;</code> tag. Try Google Chrome, Safari, Opera or Firefox!"); function o(e) { e = e.originalEvent.changedTouches[0], e = document.elementFromPoint(e.clientX, e.clientY); r(e).hasClass("leftup") ? (r("#controls-direction .left").addClass("active"), r("#controls-direction .up").addClass("active"), r("#controls-direction .down").removeClass("active"), r("#controls-direction .right").removeClass("active"), n.nes.keyboard.keyDown({ keyCode: 37 }), n.nes.keyboard.keyDown({ keyCode: 38 }), n.nes.keyboard.keyUp({ keyCode: 39 }), n.nes.keyboard.keyUp({ keyCode: 40 })) : r(e).hasClass("up") ? (r("#controls-direction .left").removeClass("active"), r("#controls-direction .up").addClass("active"), r("#controls-direction .down").removeClass("active"), r("#controls-direction .right").removeClass("active"), n.nes.keyboard.keyUp({ keyCode: 37 }), n.nes.keyboard.keyDown({ keyCode: 38 }), n.nes.keyboard.keyUp({ keyCode: 39 }), n.nes.keyboard.keyUp({ keyCode: 40 })) : r(e).hasClass("rightup") ? (r("#controls-direction .left").removeClass("active"), r("#controls-direction .up").addClass("active"), r("#controls-direction .down").removeClass("active"), r("#controls-direction .right").addClass("active"), n.nes.keyboard.keyUp({ keyCode: 37 }), n.nes.keyboard.keyDown({ keyCode: 38 }), n.nes.keyboard.keyDown({ keyCode: 39 }), n.nes.keyboard.keyUp({ keyCode: 40 })) : r(e).hasClass("left") ? (r("#controls-direction .left").addClass("active"), r("#controls-direction .up").removeClass("active"), r("#controls-direction .down").removeClass("active"), r("#controls-direction .right").removeClass("active"), n.nes.keyboard.keyDown({ keyCode: 37 }), n.nes.keyboard.keyUp({ keyCode: 38 }), n.nes.keyboard.keyUp({ keyCode: 39 }), n.nes.keyboard.keyUp({ keyCode: 40 })) : r(e).hasClass("center") ? (r("#controls-direction .left").removeClass("active"), r("#controls-direction .up").removeClass("active"), r("#controls-direction .down").removeClass("active"), r("#controls-direction .right").removeClass("active"), n.nes.keyboard.keyUp({ keyCode: 37 }), n.nes.keyboard.keyUp({ keyCode: 38 }), n.nes.keyboard.keyUp({ keyCode: 39 }), n.nes.keyboard.keyUp({ keyCode: 40 })) : r(e).hasClass("right") ? (r("#controls-direction .left").removeClass("active"), r("#controls-direction .up").removeClass("active"), r("#controls-direction .down").removeClass("active"), r("#controls-direction .right").addClass("active"), n.nes.keyboard.keyUp({ keyCode: 37 }), n.nes.keyboard.keyUp({ keyCode: 38 }), n.nes.keyboard.keyDown({ keyCode: 39 }), n.nes.keyboard.keyUp({ keyCode: 40 })) : r(e).hasClass("leftdown") ? (r("#controls-direction .left").addClass("active"), r("#controls-direction .up").removeClass("active"), r("#controls-direction .down").addClass("active"), r("#controls-direction .right").removeClass("active"), n.nes.keyboard.keyDown({ keyCode: 37 }), n.nes.keyboard.keyUp({ keyCode: 38 }), n.nes.keyboard.keyUp({ keyCode: 39 }), n.nes.keyboard.keyDown({ keyCode: 40 })) : r(e).hasClass("down") ? (r("#controls-direction .left").removeClass("active"), r("#controls-direction .up").removeClass("active"), r("#controls-direction .down").addClass("active"), r("#controls-direction .right").removeClass("active"), n.nes.keyboard.keyUp({ keyCode: 37 }), n.nes.keyboard.keyUp({ keyCode: 38 }), n.nes.keyboard.keyUp({ keyCode: 39 }), n.nes.keyboard.keyDown({ keyCode: 40 })) : r(e).hasClass("rightdown") && (r("#controls-direction .left").removeClass("active"), r("#controls-direction .up").removeClass("active"), r("#controls-direction .down").addClass("active"), r("#controls-direction .right").addClass("active"), n.nes.keyboard.keyUp({ keyCode: 37 }), n.nes.keyboard.keyUp({ keyCode: 38 }), n.nes.keyboard.keyDown({ keyCode: 39 }), n.nes.keyboard.keyDown({ keyCode: 40 })) } function s(e, t) { var o = r("#controls-fire"), e = (t && (o = r("#controls-turbofire")), e.originalEvent.changedTouches[0]), e = document.elementFromPoint(e.clientX, e.clientY); r(e).hasClass("a") ? (r(".a", o).addClass("active"), r(".b", o).removeClass("active"), clearInterval(n.interval), t ? (n.nes.keyboard.keyDown({ keyCode: "AA" }), n.nes.keyboard.keyUp({ keyCode: 90 }), n.interval = setInterval(function () { n.nes.keyboard.keyDown({ keyCode: "AA" }) }, 50)) : (n.nes.keyboard.keyDown({ keyCode: 88 }), n.nes.keyboard.keyUp({ keyCode: 90 }))) : r(e).hasClass("b") ? (r(".a", o).removeClass("active"), r(".b", o).addClass("active"), clearInterval(n.interval), t ? (n.nes.keyboard.keyUp({ keyCode: 88 }), n.nes.keyboard.keyDown({ keyCode: "BB" }), n.interval = setInterval(function () { n.nes.keyboard.keyDown({ keyCode: "BB" }) }, 50)) : (n.nes.keyboard.keyUp({ keyCode: 88 }), n.nes.keyboard.keyDown({ keyCode: 90 }))) : r(e).hasClass("c") ? (r(".a", o).addClass("active"), r(".b", o).addClass("active"), clearInterval(n.interval), t ? (n.nes.keyboard.keyDown({ keyCode: "AA" }), n.nes.keyboard.keyDown({ keyCode: "BB" }), n.interval = setInterval(function () { n.nes.keyboard.keyDown({ keyCode: "AA" }), n.nes.keyboard.keyDown({ keyCode: "BB" }) }, 50)) : (n.nes.keyboard.keyDown({ keyCode: 88 }), n.nes.keyboard.keyDown({ keyCode: 90 }))) : (clearInterval(n.interval), r(".a", o).removeClass("active"), r(".b", o).removeClass("active"), n.nes.keyboard.keyUp({ keyCode: 88 }), n.nes.keyboard.keyUp({ keyCode: 90 })) } } var a = this; return t.prototype = { loadROM: function () { var n = this, e = value; n.updateStatus("Downloading..."), r.ajax({ url: escape(e), xhr: function () { var e = r.ajaxSettings.xhr(); return void 0 !== e.overrideMimeType && e.overrideMimeType("text/plain; charset=x-user-defined"), n.xhr = e }, complete: function (e, t) { var o; o = JSNES.Utils.isIE() ? (o = JSNESBinaryToArray(e.responseBody).toArray(), String.fromCharCode.apply(void 0, o)) : e.responseText, n.nes.loadRom(o), n.nes.start(), n.enable() } }) }, resetCanvas: function () { this.canvasContext.fillStyle = "black", this.canvasContext.fillRect(0, 0, 256, 240); for (var e = 3; e < this.canvasImageData.data.length - 3; e += 4)this.canvasImageData.data[e] = 255 }, screenshot: function () { var e = this.screen[0].toDataURL("image/png"), t = new Image; return t.src = e, t }, enable: function () { this.buttons.pause.attr("disabled", null), this.nes.isRunning ? this.buttons.pause.attr("value", "暂停") : this.buttons.pause.attr("value", "继续"), this.buttons.restart.attr("disabled", null), this.nes.opts.emulateSound ? this.buttons.sound.attr("value", "关闭声音") : this.buttons.sound.attr("value", "打开声音") }, updateStatus: function (e) { this.status.text(e) }, setRoms: function (e) { e = r("<div id = rom>" + e.url + "</div>"); this.romSelect.append(e) }, writeAudio: function (e) { if (this.dynamicaudio) return this.dynamicaudio.writeInt(e); for (var t = this.audio.createBuffer(2, e.length, this.audio.sampleRate), o = t.getChannelData(0), n = t.getChannelData(1), s = 0, a = 0; a < e.length; a += 2)o[s] = this.intToFloatSample(e[a]), n[s] = this.intToFloatSample(e[a + 1]), s++; var r = this.audio.createBufferSource(); r.buffer = t, r.connect(this.audio.destination), r.start() }, intToFloatSample: function (e) { return e / 32767 }, writeFrame: function (e, t) { for (var o, n, s = this.canvasImageData.data, a = 0; a < 61440; a++)(o = e[a]) != t[a] && (s[n = 4 * a] = 255 & o, s[1 + n] = o >> 8 & 255, s[2 + n] = o >> 16 & 255, t[a] = o); this.canvasContext.putImageData(this.canvasImageData, 0, 0) } }, t } }(jQuery);