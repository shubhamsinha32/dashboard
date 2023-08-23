/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.79
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a,b){"use strict";var c={amex:[15,15],diners_club:[14,14],cjb:[16,16],laser:[16,19],visa:[16,16],mastercard:[16,16],maestro:[12,19],discover:[16,16]},d=!1,e=!1;var f=function(b,c,d,e,f){var g=c.valAttr("req-params")||c.data("validation-req-params")||{},h=c.valAttr("param-name")||c.attr("name"),i=function(a,b){b(a)};if(!h)throw new Error("Missing input name used for http requests made by server validator");g||(g={}),"string"==typeof g&&(g=a.parseJSON(g)),g[h]=d,a.ajax({url:b,type:"POST",cache:!1,data:g,dataType:"json",error:function(a){return i({valid:!1,message:"Connection failed with status: "+a.statusText},f),!1},success:function(a){i(a,f)}})};a.fn.displayPasswordStrength=function(b){return new a.formUtils.validators.validate_strength.strengthDisplay(this,b),this};var g=function(b,c,d){if(c||(c=a("form")),"undefined"!=typeof grecaptcha&&!a.formUtils.hasLoadedGrecaptcha)throw new Error("reCaptcha API can not be loaded by hand, delete reCaptcha API snippet.");if(!a.formUtils.hasLoadedGrecaptcha&&a('[data-validation~="recaptcha"]',c).length){a.formUtils.hasLoadedGrecaptcha=!0;var e="//www.google.com/recaptcha/api.js?onload=reCaptchaLoaded&render=explicit"+(d.lang?"&hl="+d.lang:""),f=document.createElement("script");f.type="text/javascript",f.async=!0,f.defer=!0,f.src=e,document.getElementsByTagName("body")[0].appendChild(f)}};b.reCaptchaLoaded=function(b){b&&"object"==typeof b&&b.length||(b=a("form")),b.each(function(){var b=a(this),c=b.get(0).validationConfig||b.context.validationConfig||!1;c&&a('[data-validation~="recaptcha"]',b).each(function(){var d=a(this),e=document.createElement("DIV"),f=c.reCaptchaSiteKey||d.valAttr("recaptcha-sitekey"),g=c.reCaptchaTheme||d.valAttr("recaptcha-theme")||"light",h=c.reCaptchaSize||d.valAttr("recaptcha-size")||"normal",i=c.reCaptchaType||d.valAttr("recaptcha-type")||"image";if(!f)throw new Error("Google reCaptcha site key is required.");var j=grecaptcha.render(e,{sitekey:f,theme:g,size:h,type:i,callback:function(a){b.find('[data-validation~="recaptcha"]').trigger("validation",a&&""!==a)},"expired-callback":function(){b.find('[data-validation~="recaptcha"]').trigger("validation",!1)}});d.valAttr("recaptcha-widget-id",j).hide().on("beforeValidation",function(a){a.stopImmediatePropagation()}).parent().append(e)})})},a(b).on("validatorsLoaded formValidationSetup",g)}(a,window)});