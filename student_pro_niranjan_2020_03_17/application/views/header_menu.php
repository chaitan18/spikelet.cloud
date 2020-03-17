<header class="main-header">
  <!-- Logo -->
  <a href="index2.html" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini"><b>Exam</b></span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg"><b>Exam- </b>Module</span>
  </a>
  <!-- Header Navbar: style can be found in header.less -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>

    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <li class="dropdown tasks-menu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-cart-arrow-down "></i>
			      <span class="label label-danger">
              <div id="cartItemsNo">
                <?php	$cart_items = $this->session->userdata('cart_products');
  				      $cart_no=count($cart_items);
  				      if($cart_no!=0){
                  echo $cart_no;
                } ?>
              </div>
            </span>			
          </a>
          <ul class="dropdown-menu" id="cartItems">
            <li>
              <ul class="menu">
                <?php if(count($cart_items) > 0){
                  foreach($cart_items  as $cartitems){ ?>
                    <li><!-- Task item -->
                      <a href="#">
                        <h3>
                          <?php echo $cartitems['spikelet_name'].'-'.$cartitems['spikelet_cost']; ?>
                        </h3>
                      </a>
                    </li>
                  <!-- end task item -->
                  <?php }
                }else{ ?>
                  <li><a href="javascript:void(0);">NO data in the cart</a></li>
                <?php } ?>
              </ul>
            </li>
            <li class="footer">
              <?php if(count($cart_items) > 0){ ?>
                <a href="<?php echo base_url(); ?>student/gotocart">View all tasks</a>
              <?php } ?>
            </li>
          </ul>
        </li>
        <!-- User Account: style can be found in dropdown.less -->
		    <?php if(empty($this->session->userdata('login_user_id')) || $this->session->userdata('login_user_id')==0){	?>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Register <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="<?php echo base_url(); ?>landingpage/register_parent"><i class="fa fa-circle-o"></i> Parents</a></li>
              <!-- <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li class="divider"></li>
              <li><a href="#">One more separated link</a></li> -->
            </ul>
          </li>
		      <li class="dropdown user user-menu">
            <a href="<?php echo base_url(); ?>login">Login</a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="<?php echo base_url(); ?>login/logout" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
		    <?php }else{ ?>
		      <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><?php 
  	          $image = $this->db->get_where('user', array('user_id' => $this->session->userdata('login_user_id')))->row()->profile_image; ?>
              <img src="<?php echo base_url(); ?>assets/profile_image/<?php echo $image; ?>" class="user-image" alt="User Image">
              <span class="hidden-xs"><?php echo $this->session->userdata('name'); ?></span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="<?php echo base_url(); ?>assets/profile_image/<?php echo $image; ?>" class="img-circle" alt="User Image">
                <p>
                  <?php echo $this->session->userdata('name'); ?>
                  <!-- <small>Member since Nov. 2012</small> -->
                </p>
              </li>
              <!-- Menu Body -->
              <!-- <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              </li> -->
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="<?php echo base_url(); ?>login/logout" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
	      <?php } ?>
        <!-- Control Sidebar Toggle Button -->
        <!-- <li>
          <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
        </li> -->
      </ul>
    </div>
  </nav>
</header>
  