<?php $account_type   = $this->session->userdata('login_type'); ?>
<!DOCTYPE html>
<html>
  <?php include 'header_links.php'; ?>
  <body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">
      <?php if($account_type == 'Admin'){
        include $account_type . '/header_menu.php';
      }elseif($account_type == 'SuperAdmin'){
        include $account_type . '/header_menu.php';
      }else{
        include 'header_menu.php';
      } ?>
      <!-- Left side column. contains the sidebar -->
	  
      <?php include $account_type . '/side_menu.php'; ?>

      <?php include $account_type . '/' . $page_name . '.php'; ?>
      <?php include 'footer.php'; ?>
       <?php include 'right_sidemenu.php'; ?>
      <div class="control-sidebar-bg"></div>
    </div>
    <?php include 'footer_links.php'; ?>
  </body>
</html>
