  <aside class="main-sidebar">
  
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
         <?php $image = $this->db->get_where('user', array('user_id' => $this->session->userdata('login_user_id')))->row()->profile_image; ?>
          <img src="<?php echo base_url(); ?>assets/profile_image/<?php echo $image; ?>" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Welcome,</p>
          <i class="fa fa-circle text-success"></i> <?php echo $this->session->userdata('name'); ?>
        </div>
      </div>
      <!-- search form -->
      <!-- <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form> -->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
               <li>
          <a href="<?php echo base_url();?>student">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
           
          </a>
        </li>
		   <li>
          <a href="<?php echo base_url();?>Student/examspage">
            <i class="fa fa-dashboard"></i> <span>Quiz Page</span>
           
          </a>
        </li>
		
       <!--  <li>
          <a href="pages/widgets.html">
            <i class="fa fa-th"></i> <span>Menu 1</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>   -->           
        
      </ul>
    </section>
    <!-- /.sidebar -->
  
</aside>