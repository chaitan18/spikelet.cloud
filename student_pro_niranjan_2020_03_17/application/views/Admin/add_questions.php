<style type="text/css">
  .hidden{
    display: none;
  }
</style>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php echo base_url(); ?>assets/multiform-text-editor-master/src/css/style.css" type="text/css"/>
  <link rel="stylesheet" href="<?php echo base_url(); ?>assets/multiform-text-editor-master/src/css/tooltipster.css" type="text/css"/>
  <link rel="stylesheet" href="<?php echo base_url(); ?>assets/multiform-text-editor-master/src/css/tooltipster-light-extra.css" type="text/css"/>
   <script src="<?php echo base_url(); ?>assets/multiform-text-editor-master/node_modules/@wiris/mathtype-generic/wirisplugin-generic.js"></script> 
<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Quiz List</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-xs-12">
      <div class="form-group">
        <label>Select Quiz</label>
        <select class="form-control" name="quiz">
          <option value="">Select Quiz</option>
          <?php foreach ($quiz_list as $key => $value) { ?>
            <option value="<?php echo $value['quiz_id']; ?>"><?php echo $value['quiz_name']; ?></option>
          <?php } ?>
        </select>
        <p class="error" style="color: red;"></p>
      </div>
    </div>
    <div class="col-xs-12 ajax_msg"></div>
    <div class="col-xs-12 hidden" id="displayquestions">
      <form id="formdata">
        <div class="form-group">
          <label>Enter Question</label>
          <div class="col-xs-12">
    <div class="menu-edit unselectable">
      <b class="frmttxt-mn-it" data-frmt="ngrto" title="Bold">B</b>
      <i class="frmttxt-mn-it fa" data-frmt="itlco" title="Italic" style="font-style: italic;">I</i>
      <u class="frmttxt-mn-it" data-frmt="sblnhdo" title="Underline">U</u>
      &nbsp;&nbsp;❘&nbsp;&nbsp;
      <div class="frmttxt-mn-gp extra-frmt" title="Extra">
        <span><s>S</s>²</span>
        <div class="frmttxt-mn-drpdn">
          <s class="frmttxt-mn-it" data-frmt="rscdo" title="strikethrough">S</s>
          <span class="frmttxt-mn-it" data-frmt="sbrlnhdo" data-val="overline" title="overline" style="text-decoration: overline;">O</span>
          <span class="frmttxt-mn-it sobrescrito" data-frmt="sbrscrto" title="superscript"><span>X</span>²</span>
          <span class="frmttxt-mn-it subscrito" data-frmt="sbscrto" title="subscript"><span>X</span>₂</span>
        </div>
      </div>
      &nbsp;&nbsp;
      <div class="frmttxt-mn-gp insere-crctr" title="Symbols">
        <span>Ω∫</span>
        <div class="frmttxt-mn-drpdn">
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">×</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">÷</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">√</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">±</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">≤</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">≥</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">≈</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">≠</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">⇒</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">⇔</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">→</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">¬</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">⊂</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">⊃</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∑</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∃</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">α</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">β</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">γ</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∆</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">Θ</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">λ</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">μ</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">ξ</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">π</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">σ</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">Ψ</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">Ω</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">δ</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∂</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∞</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∫</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">∮</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∪</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">∩</span>
          <span class="frmttxt-mn-it" data-frmt="insrcrctr">£</span><span class="frmttxt-mn-it" data-frmt="insrcrctr">€</span>
        </div>
      </div>
      &nbsp;&nbsp;
      <div class="frmttxt-mn-gp tipo-lista fa fa-list" title="List">
        <div class="frmttxt-mn-drpdn">
          <span class="frmttxt-mn-it fa fa-list-ul" data-frmt="tplist1" title="unordered"><span></span></span>
          <span class="frmttxt-mn-it fa fa-list-ol" data-frmt="tplist2" title="ordered"><span></span></span>
        </div>
      </div>
      <div id="toolbar" style="width: 40px"></div>
      &nbsp;&nbsp;&nbsp;❘&nbsp;&nbsp;
      <div class="frmttxt-mn-gp fonte-tmnho" title="Font size">
        <span>T<small>↕</small></span>
        <ul class="frmttxt-mn-drpdn">
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="12px">12px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="14px">14px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="16px">16px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="18px">18px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="20px">20px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="22px">22px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="24px">24px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="26px">26px</li>
          <li class="frmttxt-mn-it" data-frmt="fnttmnho" data-val="28px">28px</li>
        </ul>
      </div>
      &nbsp;&nbsp;
      <div class="frmttxt-mn-gp texto-cor fa fa-tint" title="Color">
        <div class="frmttxt-mn-drpdn">
          <span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(255, 255, 255)" style="background: #FFFFFF;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(247, 218, 100)" style="background: #F7DA64;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(250, 197, 28)" style="background: #FAC51C;"></span>
          <span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(251, 160, 38)" style="background: #FBA026;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(243, 121, 52)" style="background: #F37934;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(209, 213, 216)" style="background: #D1D5D8;"></span>
          <span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(213, 170, 170)" style="background: #D5AAAA;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(235, 107, 86)" style="background: #EB6B56;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(226, 80, 65)" style="background: #E25041;"></span>
          <span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(184, 49, 47)" style="background: #B8312F;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(170, 213, 170)" style="background: #AAD5AA;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(97, 189, 109)" style="background: #61BD6D;"></span>
          <span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(0, 168, 133)" style="background: #00A885;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(128, 110, 128)" style="background: #806E80;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(149, 64, 129)" style="background: #954081;"></span>
          <span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(84, 172, 210)" style="background: #54ACD2;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(44, 130, 201)" style="background: #2C82C9;"></span><span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(71, 85, 119)" style="background: #475577;"></span>
          <span class="frmttxt-mn-it" data-frmt="txtcor" data-val="rgb(0, 0, 0)" style="background: #000000;"></span>
          <span class="frmttxt-mn-it rmv" data-frmt="txtcor" data-val="#888888" style="background: #F1F1F1;">×</span><!-- Usado como remoção de cor de texto ou fundo -->
          <div class="frmttxt-mn-mp" data-mnpl="txtcortp">
            <input id="tipo-cor1" type="radio" name="tipo-cor" value="1" checked><label for="tipo-cor1">Text</label>
            <input id="tipo-cor2" type="radio" name="tipo-cor" value="2"><label for="tipo-cor2">Background</label>
          </div>
        </div>
      </div>
      &nbsp;&nbsp;
      <div class="frmttxt-mn-gp frmttxt-mn-mp insere-link fa fa-link" data-mnpl="insrlnkvl" title="Link">
        <div class="frmttxt-mn-drpdn">
          <input type="text" placeholder="Enter an address"><span class="frmttxt-mn-it" data-frmt="insrlnk">ok</span>
          <input type="file" id="imgInp"  placeholder="Enter an address">
        </div>

      </div>

      &nbsp;&nbsp;
      <span class="frmttxt-mn-it remove-link fa fa-chain-broken" data-frmt="rmvlnk" title="Unlink">&nbsp;</span>
      &nbsp;&nbsp;❘&nbsp;&nbsp;
      <span class="frmttxt-mn-it fa fa-ban" data-frmt="lmpfrmt" title="Clear formatting"></span>
    </div>
    <!-- Text box -->
    <div id="box-txt-input" class="changeable box-txt" contenteditable="true" placeholder="Enter text here...">
      
    </div>
  </div>
        <input type="hidden" name="question" class="question_add" />
          <!-- <textarea class="form-control" name="question" style="resize: none;"></textarea> -->
          <p class="error_hidden" style="color: red;"></p>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label>Option 1</label>
              <input type="text" class="form-control" name="option1">
              <p class="error" style="color: red;"></p>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label>Option 2</label>
              <input type="text" class="form-control" name="option2">
              <p class="error" style="color: red;"></p>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label>Option 3</label>
              <input type="text" class="form-control" name="option3">
              <p class="error" style="color: red;"></p>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label>Option 4</label>
              <input type="text" class="form-control" name="option4">
              <p class="error" style="color: red;"></p>
            </div>
          </div>

          <div class="col-xs-6">
            <div class="form-group">
              <label>Select correct answer among the options</label>
              <select name="crt_option" class="form-control">
                <option value="">Select Option</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
              <p class="error" style="color: red;"></p>
            </div>
          </div>

          <div class="col-xs-6">
            <div class="form-group">
              <label>Enter correct option answer</label>
              <input type="text" class="form-control" name="correct_answer">
              <p class="error" style="color: red;"></p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <label>Hint for the question</label>
            <input type="text" class="form-control" name="hint">
            <p class="error" style="color: red;"></p>
          </div>

          <div class="col-xs-12">
            <button type="button" class="btn btn-sm btn-success addquestion" style="float: right;">Add Question</button>
          </div>
        </div>
      </form>
    </div>    
  </section>
</div>

<script type="text/javascript">
function readURL(input) {

        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $('#box-txt-input').append('<img id="blah" src="#" alt="your image" style="width:50px;height:50px;"/>');
            $('#blah').attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]);
        }
      }

      $("#imgInp").change(function() {
        readURL(this);
      });
  $(function(){
    var contents = $('.changeable').html();
      $('.changeable').blur(function() {
          if (contents!=$(this).html()){
              contents = $(this).html();
              $(".question_add").val(contents);
             
          }
      });

    $('select[name="quiz"]').on('change', function(){
      var quiz_val = $(this).val();
      if(quiz_val != ''){
        if($('#displayquestions').hasClass('hidden')){
          $('#displayquestions').removeClass('hidden');
        }
      }else{
        if(!$('#displayquestions').hasClass('hidden')){
          $('#displayquestions').addClass('hidden');
        }
      }      
    });

    $('.addquestion').on('click', function(){
      $('.error').html('');
      $(this).prop('disabled', true);
      var errorcount = 0;
      $('input[type=text]', '#formdata').each(function() {
        if($.trim($(this).val()).length === 0){
          $(this).closest('.form-group').find('.error').html('This field is required');
          errorcount = errorcount + 1;
        }
      });

      $('input[name="question"]', '#formdata').each(function() {
        if($.trim($(this).val()).length === 0){
          $('.error_hidden').html('This field is required');
          errorcount = errorcount + 1;
        }else{
          $('.error_hidden').html('');
          errorcount=0;
        }
      });

      $('select', '#formdata').each(function() {
        if($.trim($(this).val()).length === 0){
          $(this).closest('.form-group').find('.error').html('This field is required');
          errorcount = errorcount + 1;
        }
      });
       
      if(errorcount == 0){
        var quiz_id = $('select[name="quiz"]').val();
        var question = $('input[name="question"]').val();
        var option1 = $('input[name="option1"]').val();
        var option2 = $('input[name="option2"]').val();
        var option3 = $('input[name="option3"]').val();
        var option4 = $('input[name="option4"]').val();
        var crt_option = $('select[name="crt_option"]').val();
        var crt_answer = $('input[name="correct_answer"]').val();
        var hint = $('input[name="hint"]').val();

        $.ajax({
          url : "<?php echo base_url(); ?>admin/insert_question",
          dataType : "json",
          type : "post",
          data : {
            quiz_id : quiz_id,
            question : question,
            option1 : option1,
            option2 : option2,
            option3 : option3,
            option4 : option4,
            crt_option : crt_option,
            crt_answer : crt_answer,
            hint : hint
          },
          error : function(){
            $('.ajax_msg').html('<p style="color:red;">Something went wrong please refresh the page and try again.</p>');
          },
          success : function(data){
            console.log(data.status);
            console.log(data.message);
            if(data.status == 0){
              $('.ajax_msg').html('<p style="color:red;">'+data.message+'</p>');
            }else{
              $('.ajax_msg').html('<p style="color:green;">'+data.message+'</p>');
              $('select[name="quiz"]').val('');
              $('input[name="question"]').val('');
              $('input[name="option1"]').val('');
              $('input[name="option2"]').val('');
              $('input[name="option3"]').val('');
              $('input[name="option4"]').val('');
              $('select[name="crt_option"]').val('');
              $('input[name="correct_answer"]').val('');
              $('#displayquestions').addClass('hidden');
              $('input[name="hint"]').val('');
            }
            $('.addquestion').prop('disabled', false);
          }
        });
      }else{
        $('.addquestion').prop('disabled', false);
      }

    });
  });
</script>




   

  <script src="<?php echo base_url(); ?>assets/multiform-text-editor-master/src/lib/jquery.min.js" charset="utf-8"></script>
  <script src="<?php echo base_url(); ?>assets/multiform-text-editor-master/src/js/jquery.tooltipster.min.js" charset="utf-8"></script>
  <script src="<?php echo base_url(); ?>assets/multiform-text-editor-master/src/js/jquery.multiform-text-editor.js" charset="utf-8"></script>
  <script src="<?php echo base_url(); ?>assets/multiform-text-editor-master/src/js/effects.js"></script>
  <script type="text/javascript">
 var genericIntegrationProperties = {};
      genericIntegrationProperties.target = document.getElementById('box-txt-input');
      genericIntegrationProperties.toolbar = document.getElementById('toolbar');
 
      // GenericIntegration instance.
      var genericIntegrationInstance = new WirisPlugin.GenericIntegration(genericIntegrationProperties);
      genericIntegrationInstance.init();
      genericIntegrationInstance.listeners.fire('onTargetReady', {});
      htmlData = WirisPlugin.Parser.initParse(htmlData);
      WirisPlugin.Parser.initParse('<span>hello!</span>  <math><mo>x</mo></math> goodbye');
      var htmlEditor = document.getElementById('box-txt-input');
var data = 'Initial data: <math><msqrt><mo>x</mo></msqrt></math>'
htmlEditor.innerHTML = WirisPlugin.Parser.initParse(data);
  </script>
