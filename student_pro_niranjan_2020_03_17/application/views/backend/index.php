<?php $account_type   = $this->session->userdata('login_type'); ?>
<!DOCTYPE html>
<html>
<?php include 'header_links.php'; ?>
<body class="hold-transition skin-blue sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">

  <?php include 'header_menu.php'; ?>

  <!-- =============================================== -->

  <!-- Left side column. contains the sidebar -->
  <?php include $account_type . '/side_menu.php'; ?>

  <!-- =============================================== -->

  <?php include $account_type . '/' . $page_name . '.php'; ?>

  <?php include 'footer.php'; ?>

  <!-- Control Sidebar -->
  <?php include 'right_sidemenu.php'; ?>
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

<?php include 'footer_links.php'; ?>
</body>
</html>
