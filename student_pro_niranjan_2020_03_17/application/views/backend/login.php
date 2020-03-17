<!DOCTYPE html>
<html>
<?php include 'header_links.php'; ?>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="<?php base_url(); ?>index.php?login"><b>RDT</b>Ecology</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body"><?php
    if($this->session->flashdata('wr_user')) {
        echo '<div class="alert alert-danger">'.$this->session->flashdata('wr_user').'</div>';
    }
    if($this->session->flashdata('wr_password')) {
        echo '<div class="alert alert-danger">'.$this->session->flashdata('wr_password').'</div>';
    } ?>
    <p class="login-box-msg">Sign in to start your session</p>

    <form action="<?php base_url();?>login/check_login" method="post">
      <div class="form-group has-feedback">
        <input type="text" name="username" class="form-control"  placeholder="Email/Username" required>
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" name="password" class="form-control" placeholder="Password" required>
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

    <!-- <a href="#">I forgot my password</a><br>
    <a href="register.html" class="text-center">Register a new membership</a> -->

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->


<!-- iCheck -->


</body>
</html>
