import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//import { DataSet } from 'vis';
declare var $:any;
// (window as any).global = window;
declare var window: any;
declare var tinyMCE:any;
declare var WirisPlugin:any;

import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
// export class TestComponent implements OnInit {
 
//   constructor(public router: Router) { }
//   ngAfterViewInit(){ 
// 	 $(document).ready(function(){
// 	   $('#menuToggle').on('click', function(event) {
// 	     $('body').toggleClass('open');
//      });
//     });
    
//   }
//   ngOnInit() {
   
 
//   }

// }

export class TestComponent implements OnInit {
    
  
  
    constructor(public router: Router) { 
     // this.getTimelineData();
    }
   
    ngOnInit() {
    }
  
    ngAfterViewInit() {    
     
      // var genericIntegrationProperties = {};
      // genericIntegrationProperties['target'] = document.getElementById('htmlEditor');
      // genericIntegrationProperties['toolbar'] = document.getElementById('toolbar');
     
      // // GenericIntegration instance.
      // var genericIntegrationInstance = new WirisPlugin.GenericIntegration(genericIntegrationProperties);
      // genericIntegrationInstance.init();
      // genericIntegrationInstance.listeners.fire('onTargetReady', {});

      // var _gaq = _gaq || [];
      // _gaq.push(['_setAccount', 'UA-36251023-1']);
      // _gaq.push(['_setDomainName', 'jqueryscript.net']);
      // _gaq.push(['_trackPageview']);

      // (function() {
      //   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      //   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      //   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      // })();

      //var window: Window; 
      // $(document).ready(function () {

		  // function getParameter(name,dflt) {
      //   var value = new RegExp(name+"=([^&]*)","i").exec(window.location);
      //   if (value!=null && value.length>1) return decodeURIComponent(value[1].replace(/\+/g,' ')); else return dflt;
      //   }
      //   var lang = getParameter("language","");
      //   if (lang.length==0) lang="en";

      //   var dir = 'ltr';
      //   if (lang == 'ar' || lang == 'he'){
      //   dir = 'rtl';
      //   }

      //   tinyMCE.init({
      //   // mode: 'textareas',
      //   selector : "#content",
      //   theme: 'advanced',
      //   skin: 'o2k7',
      //   width : "300",
      //   height : "100",				

      //   language: lang, 
      //   directionality : dir,

      //   plugins : "safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,tiny_mce_wiris,pramukhime",
      //   theme_advanced_buttons1 : "code,|,bold,italic,underline,,undo,redo,|,forecolor,backcolor,|,cut,copy,paste,|,tiny_mce_wiris_formulaEditor,|,fullscreen",
      //   theme_advanced_buttons2 : ",|,search,|,justifyleft,justifycenter,justifyright,fontselect,fontsizeselect,|,pramukhime,pramukhimeclick,pramukhimeconvert,pramukhimehelp",
      //   theme_advanced_buttons3 : "",

      //   theme_advanced_toolbar_location : "top",
      //   theme_advanced_toolbar_align : "left",
      //   theme_advanced_statusbar_location : "bottom",
      //   theme_advanced_resizing : true,

      //   // Drop lists for link/image/media/template dialogs
      //   template_external_list_url : "lists/template_list.js",
      //   external_link_list_url : "lists/link_list.js",
      //   external_image_list_url : "lists/image_list.js",
      //   media_external_list_url : "lists/media_list.js",

      //   // Replace values for the template plugin
      //   template_replace_values : {
      //     username : "Some User",
      //     staffid : "991234"
      //   }


      //   });
      // });
   }
 
  }

