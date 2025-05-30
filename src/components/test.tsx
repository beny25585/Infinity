// // javascript document{/*
// const _vp_hightligh_btns_class = "selected";
// const _vp_sessionjs_cookie = "_vp_sessionjs_cookie";
// const _vp_cookie_exdays = 1;

// let _vp_toolbox,
//   _vp_active_element,
//   _vp_btns,
//   _vp_links,
//   _vp_tab_index,
//   _vp_css_link;
// let _vp_btns_ids_arr = [];
// let vp_sections_arr = [];
// let vp_headings_arr = [];
// let vp_navigation_arr = [];
// let vp_common_titles = [];
// let vp_common_content = [];
// var vp_social_icons = [];
// var clashing_styles = {
//   vp_filter_grayscale: "grayscale",
//   vp_filter_contrast: "high-contast",
//   vp_filter_bw: "black-white",
//   vp_filter_negative: "negative",
// };
// let vpfsize_arr = [100, 110, 120, 130, 140, 150, 175, 200];
// let _vp_main_classes = "";
// let _vp_cursor_colors = ["black", "white"];
// const _vp_initial_loading_style =
//   "display: none; top: -9999px; position: absolute;";

// let readableelements = [];

// let keyboard_shortcut = true;

// var active_text = '<span class="vp-sr-only">פָּעִיל</span>';
// var _vp_checkmark_icon = "";

// let screenreaderenabled = false;
// let speechindicator = "";
// let vp_language = "he-il";

// _vp_create_iframe();

// function _vp_create_iframe() {
//   if (typeof window.args["icon"] !== "undefined") {
//     window.args["icon"] = encodeuricomponent(window.args["icon"]);
//   }

//   if (typeof window.args["links"] !== "undefined") {
//     if (typeof window.args["links"]["acc_policy"] !== "undefined") {
//       window.args["links"]["acc_policy"] = encodeuricomponent(
//         window.args["links"]["acc_policy"]
//       );
//     }
//     if (typeof window.args["links"]["additional_link"] !== "undefined") {
//       window.args["links"]["additional_link"] = encodeuricomponent(
//         window.args["links"]["additional_link"]
//       );
//     }
//   }

//   var page_lang = get_html_lang();
//   if (page_lang && typeof window.args["language"] == "undefined") {
//     window.args["language"] = page_lang;
//   }

//   const url =
//     window.args["access"] +
//     "/lib/access.php?nocache&sitekey=" +
//     window.args["sitekey"];
//   window.args["access"] = encodeuricomponent(window.args["access"]);
//   let post = json.stringify(window.args);
//   let xhr = new xmlhttprequest();

//   xhr.open("post", url, true);
//   xhr.setrequestheader("content-type", "application/json; charset=utf-8");
//   xhr.setrequestheader("x-requested-with", "xmlhttprequest");
//   //xhr.setrequestheader('access-control-allow-origin', '*');
//   //xhr.setrequestheader('access-control-allow-headers', '*');
//   //xhr.setrequestheader("content-type", "application/x-www-form-urlencoded");

//   xhr.send(post);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log("vee plugin successfully loaded!");
//       _vp_add_plugin_helpers(this.responsetext);
//     }
//   };
// }

// function get_html_lang() {
//   var lang = false;
//   if (document.documentelement.lang) {
//     lang = document.documentelement.lang;

//     var lang_array = lang.split("-");
//     lang = lang_array[0];
//   }

//   return lang;
// }

// function _vp_add_plugin_helpers(responsetext) {
//   var focusable = document.queryselectorall(
//     'a, [tabindex]:not([tabindex="-1"])'
//   );

//   if (document.documentelement.lang) {
//     vp_language = document.documentelement.lang;
//   } else if (document.getelementsbytagname("html")[0].getattribute("lang")) {
//     vp_language = document.getelementsbytagname("html")[0].getattribute("lang");
//   }

//   readableelements = document.queryselectorall(
//     "h1, h2, h3, h4, h5, h6, p, a, button, submit, input, textarea, select, img"
//   );

//   if (window.args["position"] == "left" || window.args["position"] == "left") {
//     _vp_main_classes += "_vp_pos_left_side";
//   }

//   var options = window.args["options"];
//   if (typeof options !== "undefined") {
//     if (options["open"]) _vp_main_classes += " _vp_toolbox_visible";

//     var value;
//     for (var k in options) {
//       if (options.hasownproperty(k)) {
//         value = options[k].tostring();
//         value = value.tolowercase();
//         if (value) _vp_main_classes += " _vp_" + k + "_" + value;
//       }
//     }
//   }

//   var plugin = document.createelement("aside");
//   plugin.setattribute("id", "vplugin");
//   plugin.setattribute("style", _vp_initial_loading_style);
//   plugin.setattribute("class", _vp_main_classes);
//   plugin.innerhtml = responsetext;
//   document.body.prepend(plugin);
//   _vp_toolbox = document.getelementbyid("vplugin");
//   _vp_css_link = document.getelementbyid("_vp_main_css_rules");
//   _vp_collect_tab_indexed_elements();

//   var vplugin_links = document.createelement("nav");
//   vplugin_links.setattribute("id", "vplugin-top-hidden-link");
//   document.body.prepend(vplugin_links);

//   var init = document.createelement("a");
//   init.setattribute("id", "vplugin-init-link");
//   init.setattribute("class", "vplugin-hidden-link-init");
//   init.setattribute("access-key", "i");
//   init.setattribute("href", "#");
//   init.innerhtml = "&nbsp;";

//   if (
//     typeof window.args["options"] !== "undefined" &&
//     typeof window.args["options"]["keyboard_shortcut"] !== "undefined" &&
//     window.args["options"]["keyboard_shortcut"] == true
//   ) {
//     var instructions = document.createelement("a");
//     instructions.setattribute("id", "vplugin-instructions-link");
//     instructions.setattribute("class", "vplugin-hidden-link");
//     instructions.setattribute("tabindex", "1");
//     instructions.setattribute("access-key", "i");
//     instructions.setattribute("href", "#vplugin");
//     instructions.setattribute("style", _vp_initial_loading_style);
//     instructions.innerhtml =
//       document.getelementbyid("vplugin-interface").dataset.instructionstext;
//     document.getelementbyid("vplugin-top-hidden-link").append(instructions);
//   } else {
//     keyboard_shortcut = false;
//   }

//   if (
//     document.getelementbyid("vplugin-interface").dataset.activetext !== "" &&
//     document.getelementbyid("vplugin-interface").dataset.activetext !==
//       "undefined"
//   ) {
//     active_text =
//       '<span class="vp-sr-only">' +
//       document.getelementbyid("vplugin-interface").dataset.activetext +
//       "</span>";
//   }

//   var skip = document.createelement("a");
//   skip.setattribute("id", "vplugin-skip-to-content-link");
//   skip.setattribute("class", "vplugin-hidden-link");
//   skip.setattribute("tabindex", "1");
//   skip.setattribute("access-key", "s");

//   if (window.args["container"] && window.args["container"] !== "#content") {
//     var container = document.queryselector(window.args["container"]);
//     container.setattribute("id", "vp_content_container");
//     skip.setattribute("href", "#vp_content_container");
//   } else {
//     skip.setattribute("href", "#content");
//   }

//   skip.setattribute("style", _vp_initial_loading_style);
//   skip.innerhtml =
//     document.getelementbyid("vplugin-interface").dataset.skiptext;
//   document.getelementbyid("vplugin-top-hidden-link").append(skip);

//   // speech indicator
//   var _vp_speechindicator = document.createelement("div");
//   _vp_speechindicator.setattribute("id", "_vp_speechindicator");
//   _vp_speechindicator.setattribute("class", "_vp_speechindicator");
//   document.body.prepend(_vp_speechindicator);

//   speechindicator = document.getelementbyid("_vp_speechindicator");

//   _vp_bind_ui();
// }

// function _vp_bind_ui() {
//   _vp_btns = document.queryselectorall(".vp-btn");
//   _vp_links = document.queryselectorall(".vp-link");
//   _vp_checkmark_icon = document.queryselector(
//     "#vplugin-toggler .vp-check-mark"
//   );

//   document.body.dataset.vpfsize = 0;
//   document.body.dataset.vplspacing = 0;
//   document.body.dataset.vpwspacing = 0;
//   document.body.dataset.vpimgalt = 0;

//   _vp_btns.foreach((vp_btn) => {
//     vp_btn.addeventlistener("click", function handleclick(e) {
//       e.preventdefault();
//       _vp_do_action(this);
//     });
//     // todo: set 1 if toolbar is initially opened
//     vp_btn.setattribute("tabindex", "-1");
//     _vp_btns_ids_arr.push(vp_btn.getattribute("id"));
//   });

//   _vp_links.foreach((_vp_links) => {
//     _vp_links.setattribute("tabindex", "-1");
//   });

//   document
//     .getelementbyid("vp_close_toolbox")
//     .addeventlistener("click", function handleclickclose(e) {
//       e.preventdefault();
//       _vp_toggle_toolbox(0);
//     });
//   document
//     .getelementbyid("vplugin-toggler")
//     .addeventlistener("click", function handleclickclose(e) {
//       e.preventdefault();
//       _vp_toggle_toolbox();
//     });

//   document
//     .getelementbyid("vplugin-toggler-link")
//     .addeventlistener("blur", function handleblur(e) {
//       e.preventdefault();
//       //console.log( document.activeelement.id );

//       var relatedtarget = "";
//       var relatedtarget_id = "";
//       var relatedtarget_classlist = [];
//       var vp_btn = false;

//       if (e.relatedtarget) {
//         relatedtarget = e.relatedtarget;
//         if (typeof e.relatedtarget.id !== "undefined")
//           relatedtarget_id = e.relatedtarget.id;
//         if (typeof e.relatedtarget.classlist !== "undefined")
//           relatedtarget_classlist = e.relatedtarget.classlist;
//         if (
//           relatedtarget_classlist.contains("vp-btn") ||
//           relatedtarget_classlist.contains("vp-link")
//         )
//           vp_btn = true;
//       }

//       //console.log( relatedtarget_classlist + ', ' + relatedtarget_id );
//       if (
//         _vp_toolbox.classlist.contains("_vp_toolbox_visible") &&
//         !vp_btn &&
//         relatedtarget_id !== "vplugin"
//       ) {
//         document.getelementbyid("_vp_act_inc_contast").focus();
//       }
//     });

//   if (keyboard_shortcut) {
//     document
//       .getelementbyid("vplugin-instructions-link")
//       .addeventlistener("click", function handleblur(e) {
//         e.preventdefault();
//         if (_vp_toolbox.classlist.contains("_vp_toolbox_visible")) {
//           document.getelementbyid("_vp_act_inc_contast").focus();
//         } else {
//           _vp_toggle_toolbox();
//           document.getelementbyid("_vp_act_inc_contast").focus();
//         }
//       });
//   }

//   document.onkeydown = function (evt) {
//     evt = evt || window.event;
//     var isescape = false;
//     if ("key" in evt) {
//       isescape = evt.key === "escape" || evt.key === "esc";
//     } else {
//       isescape = evt.keycode === 27;
//     }
//     if (isescape && !document.documentelement.classlist.contains("lg-on")) {
//       document.getelementbyid("vplugin-toggler").click();
//     }
//   };

//   var body = document.queryselector("body");
//   body.addeventlistener("keyup", _vp_check_tab_press);

//   for (var i = 0; i < _vp_btns_ids_arr.length; i++) {
//     _vp_check_cookie(_vp_btns_ids_arr[i], 1);
//   }

//   if (_vp_css_link) {
//     _vp_css_link.addeventlistener(
//       "load",
//       function () {
//         _vp_remove_loading_style();
//       },
//       false
//     );
//   } else {
//     alert("missing css file!");
//   }
// }

// function _vp_remove_loading_style() {
//   document.getelementbyid("vplugin").removeattribute("style");
//   document.getelementbyid("vplugin-interface").removeattribute("style");
//   document.getelementbyid("vplugin-toggler").removeattribute("style");
//   document
//     .getelementbyid("vplugin-skip-to-content-link")
//     .removeattribute("style");

//   if (keyboard_shortcut)
//     document
//       .getelementbyid("vplugin-instructions-link")
//       .removeattribute("style");
// }

// function _vp_toggle_toolbox(action) {
//   var _vplugin_toggler = document.getelementbyid("vplugin-toggler");
//   var _vp_links = document.queryselectorall(".vp-link");
//   var _vplugin_interface = document.getelementbyid("vplugin-interface");
//   _vp_tab_index = "1";

//   if (_vp_toolbox.classlist.contains("_vp_toolbox_visible") || action == 0) {
//     // close
//     _vplugin_toggler.parentelement.setattribute("aria-expanded", "false");
//     _vp_toolbox.classlist.remove("_vp_toolbox_visible");
//     settimeout(function () {
//       _vplugin_interface.classlist.add("_vp_toolbox_display_none");
//     }, 333);
//     _vp_tab_index = "-1";
//     if (_vp_active_element) {
//       _vp_active_element.focus();
//     } else {
//       _vp_active_element = document.getelementbyid("vplugin-toggler-link");
//       _vp_active_element.focus();
//     }
//   } else {
//     // open
//     _vplugin_toggler.parentelement.setattribute("aria-expanded", "true");
//     _vp_toolbox.classlist.add("_vp_toolbox_visible");
//     _vplugin_interface.classlist.remove("_vp_toolbox_display_none");
//     document.getelementbyid("vplugin-toggler-link").focus();
//     _vp_tab_index = "1";
//   }

//   document
//     .getelementbyid("vp_close_toolbox")
//     .setattribute("tabindex", _vp_tab_index);

//   _vp_toolbox.setattribute("tabindex", _vp_tab_index);

//   _vp_btns.foreach((vp_btn) => {
//     vp_btn.setattribute("tabindex", _vp_tab_index);
//     if (_vp_tab_index == "-1") vp_btn.blur();
//   });
//   _vp_links.foreach((_vp_link) => {
//     _vp_link.setattribute("tabindex", _vp_tab_index);
//     if (_vp_tab_index == "-1") _vp_link.blur();
//   });
// }

// function _vp_check_tab_press(e) {
//   "use strict";
//   e = e || event;
//   if (e.keycode == 9) {
//     if (
//       document.activeelement.tagname.tolowercase() == "a" &&
//       !document.activeelement.classlist.contains("vp-btn") &&
//       !document.activeelement.classlist.contains("vp-link")
//     ) {
//       _vp_active_element = document.activeelement;
//     }
//   }
// }

// function _vp_do_action(vp_element) {
//   var action = vp_element.dataset.action;

//   switch (action) {
//     case "increase-text":
//       _vp_apply_class("body", "vp_filter_resize_font_up", vp_element);
//       break;
//     case "decrease-text":
//       _vp_apply_class("body", "vp_filter_resize_font_down", vp_element);
//       break;
//     case "reset-text":
//       _vp_apply_class("body", "vp_filter_reset_font", vp_element);
//       break;
//     case "increase-letter-spacing":
//       _vp_apply_class("body", "vp_filter_letter_spacing_up", vp_element);
//       break;
//     case "decrease-letter-spacing":
//       _vp_apply_class("body", "vp_filter_letter_spacing_down", vp_element);
//       break;
//     case "reset-letter-spacing":
//       _vp_apply_class("body", "_vp_act_reset_letter_spacing", vp_element);
//       break;
//     case "increase-word-spacing":
//       _vp_apply_class("body", "vp_filter_word_spacing_up", vp_element);
//       break;
//     case "decrease-word-spacing":
//       _vp_apply_class("body", "vp_filter_word_spacing_down", vp_element);
//       break;
//     case "reset-word-spacing":
//       _vp_apply_class("body", "_vp_act_reset_word_spacing", vp_element);
//       break;
//     case "high-contast":
//       _vp_apply_class("body", "vp_filter_contrast", vp_element);
//       break;
//     case "grayscale":
//       _vp_apply_class("body", "vp_filter_grayscale", vp_element);
//       break;
//     case "black-white":
//       _vp_apply_class("body", "vp_filter_bw", vp_element);
//       break;
//     case "negative":
//       _vp_apply_class("body", "vp_filter_negative", vp_element);
//       break;
//     case "readable-text":
//       _vp_apply_class("body", "vp_filter_readable", vp_element);
//       break;
//     case "highlight-links":
//       _vp_apply_class("body", "vp_filter_highlight_links", vp_element);
//       break;
//     case "reading":
//       _vp_apply_class("body", "reading", vp_element);
//       break;
//     case "alt":
//       _vp_img_alt(vp_element);
//       _vp_toggle_images_visibility(vp_element);
//       break;
//     case "animations":
//       _vp_apply_class("body", "vp_filter_stop_animations", vp_element);
//       break;
//     case "cursor":
//       _vp_apply_class("body", "vp_change_cursor", vp_element);
//       break;
//     case "highlight-focus":
//       _vp_apply_class("body", "vp_highlight_focus", vp_element);
//       _vp_fix_tab_indexing_keys(vp_element);
//       break;
//     case "keyboard-navigation":
//       _vp_fix_tab_indexing_keys(vp_element);
//       break;
//     case "vee-reader":
//       _vp_toggle_screen_reader(vp_element);
//       break;
//     case "highlight-titles":
//       _vp_apply_class("body", "vp_highlight_titles", vp_element);
//       break;
//     case "reset-settings":
//       _vp_reset_all_settings();
//       break;
//   }
// }

// function _vp_slide_value_on_bar(btn, vpfsize, value, prefix, reset = false) {
//   var _vp_bar = btn.parentelement.parentelement.dataset.reset;
//   _vp_bar = document.getelementbyid(_vp_bar);
//   _vp_bar.style.left = vpfsize * 15 + "px";
//   _vp_bar.queryselector("div").innerhtml = value + prefix;
//   if (reset) {
//     //console.log(btn);
//     var prev =
//       btn.parentelement.previouselementsibling.queryselector(".vp-btn").id;
//     var next =
//       btn.parentelement.previouselementsibling.queryselector(".vp-btn").id;
//     if (
//       btn.parentelement.parentelement.parentelement.queryselector(".vp-sr-only")
//         .length
//     ) {
//       btn.parentelement.parentelement.parentelement
//         .queryselector(".vp-sr-only")
//         .remove();
//     }
//     vp_toggle_checkmark_icon(0);
//     _vp_user_cookies_fn(prev, 0, 1);
//     _vp_user_cookies_fn(next, 0, 1);
//   }

//   if (vpfsize) {
//     if (
//       !btn.parentelement.parentelement.previoussibling.previoussibling.queryselector(
//         ".vp-sr-only"
//       )
//     ) {
//       btn.parentelement.parentelement.previoussibling.previoussibling.innerhtml +=
//         active_text;
//       btn.innerhtml += active_text;
//     }
//     vp_toggle_checkmark_icon(1);
//     _vp_user_cookies_fn(btn.id, vpfsize, 1);
//   } else {
//     if (
//       btn.parentelement.parentelement.previoussibling.previoussibling.queryselector(
//         ".vp-sr-only"
//       )
//     ) {
//       btn.parentelement.parentelement.previoussibling.previoussibling
//         .queryselector(".vp-sr-only")
//         .remove();
//     }
//     if (btn.parentelement.parentelement.queryselector(".vp-sr-only")) {
//       btn.parentelement.parentelement.queryselector(".vp-sr-only").remove();
//     }

//     vp_toggle_checkmark_icon(0);
//     //var other_btn = btn.parentelement.previouselementsibling.previouselementsibling.queryselector('.vp-btn').id;
//     var other_btn =
//       btn.parentelement.previoussibling.previoussibling.queryselector(
//         ".vp-btn"
//       ).id;
//     _vp_user_cookies_fn(btn.id, 0, 1);
//     _vp_user_cookies_fn(other_btn, 0, 1);
//   }
// }

// function vp_toggle_checkmark_icon(status) {
//   //console.log(_vp_checkmark_icon)
//   if (_vp_checkmark_icon) {
//     if (!document.queryselector(".vp-btn .vp-sr-only") && !status) {
//       _vp_checkmark_icon.classlist.remove("active-option");
//     } else {
//       _vp_checkmark_icon.classlist.add("active-option");
//     }
//   }
// }

// function prevent_clash(vp_class = "") {
//   for (var [key, value] of object.entries(clashing_styles)) {
//     if (document.body.classlist.contains(key)) {
//       document.queryselector('[data-action="' + value + '"]').click();
//     }
//   }
// }

// function _vp_apply_class(vp_element, vp_class, btn) {
//   var element = document.body;
//   var vpfsize = document.body.dataset.vpfsize;
//   var vplspacing = document.body.dataset.vplspacing;
//   var vpwspacing = document.body.dataset.vpwspacing;
//   var vplspacing_max = 3;
//   var vpwspacing_max = 3;
//   var btn_id = btn.id;

//   if (vp_element !== "body") {
//     element = document.getelementbyid(vp_element);
//     console.log(vp_element);
//   }

//   switch (vp_class) {
//     case "vp_filter_contrast":
//       if (element.classlist.contains(vp_class)) {
//         element.classlist.remove(vp_class);
//         _vp_hightligh_btns(btn);
//       } else {
//         if (clashing_styles.hasownproperty(vp_class)) {
//           prevent_clash();
//         }
//         element.classlist.add(vp_class);
//         _vp_hightligh_btns(btn);
//       }

//       var _vp_divs = document.queryselectorall("div");
//       _vp_divs.foreach((_vp_div) => {
//         if (isfixedposition(_vp_div) == true) {
//           _vp_div.classlist.add("keep-style");
//         }
//       });

//       break;
//     case "vp_filter_negative":
//       if (element.classlist.contains(vp_class)) {
//         element.classlist.remove(vp_class);
//         _vp_hightligh_btns(btn);
//       } else {
//         if (clashing_styles.hasownproperty(vp_class)) {
//           prevent_clash();
//         }
//         element.classlist.add(vp_class);
//         _vp_hightligh_btns(btn);
//       }

//       var _vp_divs = document.queryselectorall("div");
//       _vp_divs.foreach((_vp_div) => {
//         if (isfixedposition(_vp_div) == true) {
//           _vp_div.classlist.add("keep-style");
//         }
//       });

//       break;
//     case "vp_filter_grayscale":
//       var root = document.documentelement;
//       if (element.classlist.contains(vp_class)) {
//         element.classlist.remove(vp_class);
//         root.classlist.remove(vp_class);
//         _vp_hightligh_btns(btn);
//       } else {
//         prevent_clash();
//         element.classlist.add(vp_class);
//         root.classlist.add(vp_class);
//         _vp_hightligh_btns(btn);
//       }
//       break;
//     case "vp_filter_resize_font_up":
//       if (vpfsize < vpfsize_arr.length - 1) {
//         element.classlist.remove(
//           "vp_filter_resize_font_" + vpfsize_arr[vpfsize]
//         );
//         vpfsize++;
//         document.body.dataset.vpfsize = vpfsize;
//         element.classlist.add("vp_filter_resize_font_" + vpfsize_arr[vpfsize]);
//         _vp_slide_value_on_bar(btn, vpfsize, vpfsize_arr[vpfsize], "%");
//       }
//       break;
//     case "vp_filter_resize_font_down":
//       if (vpfsize > 0) {
//         element.classlist.remove(
//           "vp_filter_resize_font_" + vpfsize_arr[vpfsize]
//         );
//         vpfsize--;
//         document.body.dataset.vpfsize = vpfsize;
//         element.classlist.add("vp_filter_resize_font_" + vpfsize_arr[vpfsize]);
//         _vp_slide_value_on_bar(btn, vpfsize, vpfsize_arr[vpfsize], "%");
//       }
//       break;
//     case "vp_filter_reset_font":
//       element.classlist.remove("vp_filter_resize_font_" + vpfsize_arr[vpfsize]);
//       vpfsize = 0;
//       document.body.dataset.vpfsize = vpfsize;
//       _vp_slide_value_on_bar(btn, vpfsize, vpfsize_arr[vpfsize], "%", true);
//       break;
//     case "vp_filter_letter_spacing_up":
//       if (vplspacing <= vplspacing_max) {
//         element.classlist.remove("vp_filter_letter_spacing_" + vplspacing);
//         vplspacing++;
//         document.body.dataset.vplspacing = vplspacing;
//         element.classlist.add("vp_filter_letter_spacing_" + vplspacing);
//         _vp_slide_value_on_bar(btn, vplspacing, vplspacing, "");
//       }
//       break;
//     case "vp_filter_letter_spacing_down":
//       if (vplspacing > 0) {
//         element.classlist.remove("vp_filter_letter_spacing_" + vplspacing);
//         vplspacing--;
//         document.body.dataset.vplspacing = vplspacing;
//         element.classlist.add("vp_filter_letter_spacing_" + vplspacing);
//         _vp_slide_value_on_bar(btn, vplspacing, vplspacing, "");
//       }
//       break;
//     case "_vp_act_reset_letter_spacing":
//       element.classlist.remove("vp_filter_letter_spacing_" + vplspacing);
//       vplspacing = 0;
//       document.body.dataset.vplspacing = vplspacing;
//       _vp_slide_value_on_bar(btn, vplspacing, vplspacing, "", true);
//       break;
//     case "vp_filter_word_spacing_up":
//       if (vpwspacing <= vpwspacing_max) {
//         element.classlist.remove("vp_filter_word_spacing_" + vpwspacing);
//         vpwspacing++;
//         document.body.dataset.vpwspacing = vpwspacing;
//         element.classlist.add("vp_filter_word_spacing_" + vpwspacing);
//         _vp_slide_value_on_bar(btn, vpwspacing, vpwspacing, "");
//       }
//       break;
//     case "vp_filter_word_spacing_down":
//       if (vpwspacing > 0) {
//         element.classlist.remove("vp_filter_word_spacing_" + vpwspacing);
//         vpwspacing--;
//         document.body.dataset.vpwspacing = vpwspacing;
//         element.classlist.add("vp_filter_word_spacing_" + vpwspacing);
//         _vp_slide_value_on_bar(btn, vpwspacing, vpwspacing, "");
//       }
//       break;
//     case "_vp_act_reset_word_spacing":
//       element.classlist.remove("vp_filter_word_spacing_" + vpwspacing);
//       vpwspacing = 0;
//       document.body.dataset.vpwspacing = vpwspacing;
//       _vp_slide_value_on_bar(btn, vpwspacing, vpwspacing, "", true);
//       break;
//     case "vp_change_cursor":
//       vp_class = vp_class + "_" + btn.dataset.color;
//       for (var i = 0; i < _vp_cursor_colors.length; i++) {
//         if (
//           element.classlist.contains(
//             "vp_change_cursor_" + _vp_cursor_colors[i]
//           ) &&
//           vp_class !== "vp_change_cursor_" + _vp_cursor_colors[i]
//         ) {
//           element.classlist.remove("vp_change_cursor_" + _vp_cursor_colors[i]);
//           document
//             .getelementbyid("_vp_act_big_cursor_" + _vp_cursor_colors[i])
//             .classlist.remove(_vp_hightligh_btns_class);
//           _vp_user_cookies_fn(btn.id, 0, 1);
//         }
//       }

//       if (element.classlist.contains(vp_class)) {
//         element.classlist.remove(vp_class);
//         _vp_hightligh_btns(btn);
//       } else {
//         element.classlist.add(vp_class);
//         _vp_hightligh_btns(btn);
//       }
//       break;
//     case "reading":
//       var reading = document.getelementbyid("vplugin-rguide");
//       if (!reading) {
//         reading = document.createelement("div");
//         reading.setattribute("id", "vplugin-rguide");
//         reading.setattribute("class", "vplugin-rguide");
//         element.prepend(reading);
//         _vp_reading_guide();
//         _vp_hightligh_btns(btn);
//       } else {
//         reading.remove();
//         document.removeeventlistener("mousemove", this._vp_reading_guide);
//         document.removeeventlistener("touchmove", this._vp_reading_guide);
//         _vp_hightligh_btns(btn);
//       }
//       break;
//     case "vp_highlight_focus":
//       if (element.classlist.contains(vp_class)) {
//         element.classlist.remove(vp_class);
//       } else {
//         element.classlist.add(vp_class);
//       }
//       break;
//     default:
//       if (element.classlist.contains(vp_class)) {
//         element.classlist.remove(vp_class);
//         _vp_hightligh_btns(btn);
//       } else {
//         if (clashing_styles.hasownproperty(vp_class)) {
//           prevent_clash();
//         }
//         element.classlist.add(vp_class);
//         _vp_hightligh_btns(btn);
//       }
//       break;
//   }
// }

// function isfixedposition(node) {
//   if (
//     node.id == "vplugin-interface" ||
//     node.id == "vplugin-toggler" ||
//     node.parentnode.classlist.contains("btn-slider-bar")
//   ) {
//     return false; // plugin interface
//   }

//   while (node && node.nodename.tolowercase() !== "body") {
//     if (
//       window
//         .getcomputedstyle(node)
//         .getpropertyvalue("position")
//         .tolowercase() === "fixed"
//     ) {
//       return true;
//     }
//     console.log(node.classlist);
//     node = node.parentnode;
//   }

//   return false; // if got this far
// }

// function _vp_hightligh_btns(btn) {
//   if (btn.classlist.contains(_vp_hightligh_btns_class)) {
//     btn.classlist.remove(_vp_hightligh_btns_class);
//     btn.queryselector(".vp-sr-only").remove();
//     vp_toggle_checkmark_icon(0);
//     _vp_user_cookies_fn(btn.id, 0, 1);
//   } else {
//     btn.classlist.add(_vp_hightligh_btns_class);
//     btn.innerhtml += active_text;
//     vp_toggle_checkmark_icon(1);
//     _vp_user_cookies_fn(btn.id, 1, 1);
//   }
// }

// function istouchdevice() {
//   try {
//     document.createevent("touchevent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

// function _vp_reading_guide() {
//   let mydiv = document.getelementbyid("vplugin-rguide");

//   const move = (e) => {
//     try {
//       var x = !istouchdevice() ? e.pagex : e.touches[0].pagex;
//       var y = !istouchdevice() ? e.pagey : e.touches[0].pagey;
//     } catch (e) {}
//     mydiv.style.top = y + "px";
//   };
//   //for mouse
//   document.addeventlistener("mousemove", function _vp_reading_guide(e) {
//     move(e);
//   });
//   //for touch
//   document.addeventlistener("touchmove", function _vp_reading_guide(e) {
//     move(e);
//   });
// }

// function _vp_img_alt(btn) {
//   let vpimgalt = document.body.dataset.vpimgalt;
//   let imgs_arr = document.getelementsbytagname("img");
//   _vp_hightligh_btns(btn);

//   if (vpimgalt == 0) {
//     document.body.dataset.vpimgalt = 1;

//     document.addeventlistener("mousemove", function _vp_tooltip_alt(evt) {
//       var tooltip = document.getelementbyid("vplugin-img-alt-tooltip");
//       if (tooltip) {
//         try {
//           var x = !istouchdevice() ? evt.pagex : evt.touches[0].pagex;
//           var y = !istouchdevice() ? evt.pagey : evt.touches[0].pagey;
//         } catch (err) {
//           console.log(err.message);
//         }
//         tooltip.style.top = y + 10 + "px";
//         tooltip.style.left = x + 10 + "px";
//       }
//     });

//     for (var i = 0; i < imgs_arr.length; i++) {
//       imgs_arr[i].addeventlistener(
//         "mouseover",
//         function _vp_tooltip_alt_over(e) {
//           let posx = e.screenx;
//           let posy = e.screeny;

//           var alt_text = e.target.alt;
//           var tooltip = document.createelement("div");
//           tooltip.setattribute("id", "vplugin-img-alt-tooltip");
//           tooltip.setattribute("tabindex", "1");
//           tooltip.innerhtml = alt_text;
//           document.body.prepend(tooltip);
//         }
//       );

//       imgs_arr[i].addeventlistener("mouseout", function _vp_tooltip_alt_out(e) {
//         document.getelementbyid("vplugin-img-alt-tooltip").remove();
//       });
//     }
//   } else {
//     document.body.dataset.vpimgalt = 0;
//     let tooltip = document.getelementbyid("vplugin-img-alt-tooltip");
//     if (tooltip) {
//       tooltip.remove();
//     }

//     document.removeeventlistener("mousemove", this._vp_tooltip_alt);
//     for (var i = 0; i < imgs_arr.length; i++) {
//       imgs_arr[i].removeeventlistener("mouseover", this._vp_tooltip_alt_over);
//       imgs_arr[i].removeeventlistener("mouseout", this._vp_tooltip_alt_out);

//       var old_element = imgs_arr[i];
//       var new_element = old_element.clonenode(true);
//       old_element.parentnode.replacechild(new_element, old_element);
//     }
//   }

//   _vp_user_cookies_fn("_vp_act_img_alt", document.body.dataset.vpimgalt, 1);
// }

// function _vp_collect_tab_indexed_elements() {
//   vp_sections_arr = document.queryselectorall("section");
//   vp_headings_arr = document.queryselectorall("h1, h2, h3, h4, h5, h6");
//   vp_navigation_arr = document.queryselectorall(
//     "nav, .navbar-nav ul",
//     "#header .primary-menu ul",
//     ".elementor-nav-menu",
//     ".menu-primary-inner",
//     ".menu-smart"
//   );

//   vp_common_titles = document.queryselectorall(".entry-title", ".page-title");
//   vp_common_content = document.queryselectorall(
//     ".post",
//     ".page",
//     ".hentry p",
//     ".entry-content p",
//     ".post-content p"
//   );

//   vp_social_icons = document.queryselectorall(
//     ".aux-social-list span, social-menu-link i, i.fa, i.fas, i.fab, i.la, i.las, i.lab, .dashicons"
//   );

//   for (var j = 0; j < vp_common_titles.length; j++) {
//     if (vp_common_titles[j].getattribute("tabindex")) {
//       delete vp_common_titles[j];
//     }
//   }

//   for (j = 0; j < vp_common_content.length; j++) {
//     if (vp_common_content[j].getattribute("tabindex")) {
//       delete vp_common_content[j];
//     }
//   }

//   for (var i = 0; i < vp_sections_arr.length; i++) {
//     if (vp_sections_arr[i].getattribute("role")) {
//       delete vp_sections_arr[i];
//     }
//   }

//   for (j = 0; j < vp_headings_arr.length; j++) {
//     if (
//       vp_headings_arr[j].getattribute("role") ||
//       vp_headings_arr[j].getattribute("tabindex")
//     ) {
//       delete vp_headings_arr[j];
//     }
//   }

//   for (var n = 0; n < vp_navigation_arr.length; n++) {
//     if (
//       vp_navigation_arr[n].getattribute("role") &&
//       vp_navigation_arr[n].arialabel
//     ) {
//       delete vp_navigation_arr[n];
//     }
//   }
// }

// function _vp_fix_tab_indexing_keys(btn) {
//   let vp_class = btn.dataset.action;

//   if (document.body.classlist.contains(vp_class)) {
//     document.body.classlist.remove(vp_class);
//     var i;
//     for (i = 0; i < vp_sections_arr.length; i++) {
//       vp_sections_arr[i].removeattribute("role");
//     }

//     i = 0;
//     for (i = 0; i < vp_headings_arr.length; i++) {
//       vp_headings_arr[i].removeattribute("role");
//       //vp_headings_arr[i].removeattribute('tabindex');
//     }

//     i = 0;
//     for (i = 0; i < vp_common_titles.length; i++) {
//       vp_common_titles[i].removeattribute("tabindex");
//     }

//     i = 0;
//     for (i = 0; i < vp_common_content.length; i++) {
//       vp_common_content[i].removeattribute("tabindex");
//     }

//     i = 0;
//     for (i = 0; i < vp_navigation_arr.length; i++) {
//       vp_navigation_arr[i].removeattribute("role");
//     }

//     for (n = 0; n < vp_social_icons.length; n++) {
//       if (vp_social_icons[n].parentelement.queryselector(".vp-sr-only")) {
//         vp_social_icons[n].parentelement.queryselector(".vp-sr-only").remove();
//       }

//       if (vp_social_icons[n].parentelement.getattribute("aria-label")) {
//         vp_social_icons[n].parentelement.removeattribute("aria-label");
//       }
//     }

//     /*
// 		readableelements.foreach(element => {
// 			element.removeattribute('tabindex');
// 		});
// 		*/
//   } else {
//     document.body.classlist.add(vp_class);
//     /*
// 		readableelements.foreach(element => {
// 			element.setattribute('tabindex', '0');
// 		});
// 		*/

//     for (i = 0; i < vp_sections_arr.length; i++) {
//       if (!vp_sections_arr[i].getattribute("id")) {
//         var section_id = "section-" + math.floor(math.random() * 100000);
//         vp_sections_arr[i].setattribute("id", section_id);
//       }
//       vp_sections_arr[i].setattribute("role", "lankmark");
//     }

//     for (var j = 0; j < vp_headings_arr.length; j++) {
//       if (!vp_headings_arr[j].getattribute("id")) {
//         var heading_id = "heading-" + math.floor(math.random() * 100000);
//         vp_headings_arr[j].setattribute("id", heading_id);
//       }
//       vp_headings_arr[j].setattribute("role", "heading");
//       //vp_headings_arr[j].setattribute('tabindex', '0');
//     }

//     for (j = 0; j < vp_common_titles.length; j++) {
//       if (!vp_common_titles[j].getattribute("id")) {
//         heading_id = "heading-" + math.floor(math.random() * 100000);
//         vp_common_titles[j].setattribute("id", heading_id);
//       }
//       vp_common_titles[j].setattribute("tabindex", "0");
//     }

//     for (j = 0; j < vp_common_content.length; j++) {
//       if (!vp_common_content[j].getattribute("id")) {
//         heading_id = "content-" + math.floor(math.random() * 100000);
//         vp_common_content[j].setattribute("id", heading_id);
//       }
//       vp_common_content[j].setattribute("tabindex", "0");
//     }

//     for (var n = 0; n < vp_navigation_arr.length; n++) {
//       var navigation_label = "";
//       if (n == 0) {
//         navigation_label = "primary";
//       }
//       vp_navigation_arr[n].arialabel = navigation_label;
//       vp_navigation_arr[n].setattribute("role", "navigation");
//     }

//     // fix icon labels
//     for (n = 0; n < vp_social_icons.length; n++) {
//       var icon_label = vp_social_icons[n].getattribute["class"];
//       if (!icon_label) icon_label = vp_social_icons[n].classlist;
//       icon_label = icon_label[vp_social_icons[n].classlist.length - 1];

//       icon_label = icon_label.replace("fa-", "");
//       icon_label = icon_label.replace("la-", "");
//       icon_label = icon_label.replace("dashicons-", "");
//       if (icon_label.substring(icon_label.length - 2) == "-f") {
//         icon_label = icon_label.substring(0, icon_label.length - 2);
//       }

//       icon_label = icon_label.split("-").pop();

//       if (
//         !vp_social_icons[n].parentelement.queryselector(".vp-sr-only") &&
//         !vp_social_icons[n].parentelement.queryselector(".sr-only")
//       ) {
//         var sr_label = document.createelement("span");
//         sr_label.setattribute("class", "vp-sr-only");
//         sr_label.innerhtml = icon_label;
//         vp_social_icons[n].parentelement.prepend(sr_label);
//       }

//       if (!vp_social_icons[n].parentelement.getattribute("aria-label")) {
//         vp_social_icons[n].parentelement.setattribute("aria-label", icon_label);
//       }
//     }
//   }

//   _vp_toggle_screen_reader();
//   _vp_hightligh_btns(btn);
// }

// // global variable to track screen reader state
// function _vp_toggle_screen_reader(btn) {
//   screenreaderenabled = !screenreaderenabled;

//   if (screenreaderenabled) {
//     enablescreenreader();
//   } else {
//     disablescreenreader();
//   }

//   _vp_hightligh_btns(btn);
// }

// let elementswithlisteners = [];

// function enablescreenreader() {
//   // show the floating icon
//   speechindicator.classlist.add("active");

//   // select all readable elements
//   const readableelements = document.queryselectorall(
//     "h1, h2, h3, h4, h5, h6, p, a, button, input, textarea, select, img"
//   );
//   readableelements.foreach((element) => {
//     // store original tabindex properly if needed
//     if (
//       !["a", "button", "input", "textarea", "select"].includes(
//         element.tagname
//       ) &&
//       !element.hasattribute("data-original-tabindex")
//     ) {
//       element.setattribute(
//         "data-original-tabindex",
//         element.hasattribute("tabindex")
//           ? element.getattribute("tabindex")
//           : "none"
//       );
//       element.setattribute("tabindex", "0");
//     }

//     // prevent img inside <a> from getting focus
//     if (element.tagname === "img" && element.closest("a")) {
//       element.setattribute("tabindex", "-1");
//     }

//     // add listener if not already added
//     if (!element.dataset.hasfocuslistener) {
//       element.addeventlistener("focus", vp_read_element, false);
//       element.dataset.hasfocuslistener = "true"; // mark as added
//       elementswithlisteners.push(element); // track element
//     }
//   });
// }

// function disablescreenreader() {
//   window.speechsynthesis.cancel();

//   // hide floating icon
//   speechindicator.classlist.remove("active", "speaking");

//   // remove event listeners from all elements that had tabindex modified
//   elementswithlisteners.foreach((element) => {
//     if (element.dataset.hasfocuslistener) {
//       element.removeeventlistener("focus", vp_read_element, false);
//       delete element.dataset.hasfocuslistener; // remove tracking flag
//     }

//     // restore the original tabindex
//     const originaltabindex = element.getattribute("data-original-tabindex");
//     if (originaltabindex === "none") {
//       element.removeattribute("tabindex");
//     } else {
//       element.setattribute("tabindex", originaltabindex);
//     }
//     element.removeattribute("data-original-tabindex");
//   });

//   // clear the listener tracking array
//   elementswithlisteners = [];
// }

// // hide images
// let imageshidden = false;
// function _vp_toggle_images_visibility() {
//   const imgelements = document.queryselectorall("img");
//   const allelements = document.queryselectorall("*");

//   if (!imageshidden) {
//     // hide images
//     imgelements.foreach((img) => {
//       img.dataset.originalvisibility = img.style.visibility || "";
//       img.style.visibility = "hidden";
//     });

//     // hide background images
//     allelements.foreach((el) => {
//       const style = window.getcomputedstyle(el);
//       if (style.backgroundimage !== "none") {
//         el.dataset.originalbgimage = el.style.backgroundimage || "";
//         el.style.backgroundimage = "none";
//       }
//     });
//   } else {
//     // restore images
//     imgelements.foreach((img) => {
//       img.style.visibility = img.dataset.originalvisibility || "";
//     });

//     // restore background images
//     allelements.foreach((el) => {
//       if (el.dataset.originalbgimage !== undefined) {
//         el.style.backgroundimage = el.dataset.originalbgimage;
//       }
//     });
//   }

//   imageshidden = !imageshidden;
// }

// // declare `vp_read_element`
// function vp_read_element(event) {
//   const element = event.target;
//   window.speechsynthesis.cancel();

//   let text = "";
//   function isplaceholder(text) {
//     return (
//       text === "..." ||
//       text === "---" ||
//       text === "___" ||
//       text.trim().length < 2
//     );
//   }
//   function getheadinglevel(tag) {
//     const levels = {
//       h1: "כּוֹתֶרֶת רָאשִׁית",
//       h2: "כּוֹתֶרֶת מִשְׁנִית",
//       h3: "כּוֹתֶרֶת רָמָה 3",
//       h4: "כּוֹתֶרֶת רָמָה 4",
//       h5: "כּוֹתֶרֶת רָמָה 5",
//       h6: "כּוֹתֶרֶת רָמָה 6",
//     };
//     return levels[tag] || "";
//   }

//   if (element.tagname === "a") {
//     const imginside = element.queryselector("img");
//     if (imginside) {
//       const alttext = imginside.getattribute("alt")
//         ? imginside.getattribute("alt").trim()
//         : "";
//       text = isplaceholder(alttext)
//         ? "תְּמוּנָה לְלֹא תֵּאוּר"
//         : "תמונה: " + alttext;
//     } else {
//       text = element.textcontent.trim() || "קישור לְלֹא תֵּאוּר";
//     }
//     text = `קישור: ${text}`;
//   } else if (element.tagname === "img") {
//     const alttext = element.getattribute("alt")
//       ? element.getattribute("alt").trim()
//       : "";
//     text = isplaceholder(alttext) ? "תמונה לְלֹא תֵּאוּר" : "תמונה: " + alttext;
//   } else if (element.tagname.startswith("h")) {
//     const headinglevel = getheadinglevel(element.tagname);
//     text =
//       headinglevel +
//       ": " +
//       (element.textcontent.trim() || "כּוֹתֶרֶת לְלֹא תֹּכֶן");
//   } else if (element.tagname === "input" || element.tagname === "textarea") {
//     const placeholder = element.getattribute("placeholder");
//     const fieldtype =
//       element.tagname === "input" ? "שְׂדֵה קֶלֶט" : "שְׂדֵה טֵקְסְט";
//     text = placeholder
//       ? `${fieldtype}: ${placeholder}`
//       : `${fieldtype}: שדה ללא תיאור`;
//   } else if (element.tagname === "button") {
//     text = `כפתור: ${element.textcontent.trim() || "כפתור לְלֹא תֵּאוּר"}`;
//   } else if (element.tagname === "input" && element.type === "submit") {
//     text = `כפתור שְׁלִיחָה: ${element.value.trim() || "שְׁלִיחָה"}`;
//   } else {
//     text = element.textcontent.trim();
//     if (!text) {
//       text = element.getattribute("aria-label") || "טֵקְסְט לֹא קָרִיא";
//     }
//   }

//   if (text) {
//     const speech = new speechsynthesisutterance(text);
//     speech.lang = vp_language; // default 'he-il'
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;

//     // activate animation while speaking
//     speechindicator.classlist.add("speaking");

//     speech.onend = () => {
//       speechindicator.classlist.remove("speaking");
//     };

//     window.speechsynthesis.speak(speech);
//   }
// }

// function _vp_strip_str_safe(string) {
//   return string.replace(/^\s+|\s+$/g, "");
// }

// function _vp_user_cookies_fn(param_name, param_value, _vp_user_cookies_write) {
//   let _vp_current_cookie = _vp_get_cookie(_vp_sessionjs_cookie);
//   if (_vp_user_cookies_write) {
//     let _vp_current_param_value = _vp_check_cookie(param_name, 0);
//     if (_vp_current_param_value !== param_value) {
//       //console.log( 'writing ' + param_name + ' = ' + param_value );
//       const _vp_current_cookie_exp = new date();
//       _vp_current_cookie_exp.settime(
//         _vp_current_cookie_exp.gettime() +
//           _vp_cookie_exdays * 24 * 60 * 60 * 1000
//       );
//       let expires = "expires=" + _vp_current_cookie_exp.toutcstring();

//       //let _vp_current_cookie_exp = 'expires=thu, 18 dec 2023 12:00:00 utc;';
//       let _vp_current_cookie_path = "path=/";

//       let _vp_new_cookie = [];
//       _vp_new_cookie.push(param_name + "=" + param_value);
//       _vp_new_cookie.push(_vp_current_cookie_exp);
//       _vp_new_cookie.push(_vp_current_cookie_path);

//       document.cookie = _vp_new_cookie.join("; ");
//     }
//     return true;
//   } else {
//     return _vp_current_cookie;
//   }
// }

// function _vp_get_cookie(cname) {
//   let name = cname + "=";
//   let decodedcookie = decodeuricomponent(document.cookie);
//   let ca = decodedcookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charat(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexof(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function _vp_check_cookie(param_name, _vp_active, reset = false) {
//   let param_value = _vp_get_cookie(param_name);
//   if (_vp_active) {
//     if (param_value == 1) {
//       document.getelementbyid(param_name).click();
//     } else if (param_value > 1) {
//       if (!reset) {
//         for (var i = 0; i < param_value; i++) {
//           document.getelementbyid(param_name).click();
//         }
//       } else {
//         document.getelementbyid("_vp_act_reset_txt").click();
//         document.getelementbyid("_vp_act_reset_word_spacing").click();
//         document.getelementbyid("_vp_act_reset_letter_spacing").click();
//       }
//     }
//   }

//   /*
// 	if ( param_value >= 1 && _vp_active ) {
// 		for ( i = 0; i < param_value; i++ ) {
// 			document.getelementbyid(param_name).click();	
// 		}
// 	}
// 	*/

//   if (!_vp_active) {
//     return param_value;
//   }
//   //console.log(param_name, param_value);
// }

// function _vp_reset_all_settings() {
//   for (var i = 0; i < _vp_btns_ids_arr.length; i++) {
//     _vp_check_cookie(_vp_btns_ids_arr[i], 1, true);
//   }
//   _vp_user_cookies_fn("_vp_act_reset_all_settings", 0, 1);
// }
