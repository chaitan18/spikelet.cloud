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
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li> <a href="<?php echo base_url();?>superadmin/register_spinklet"> <span>Register Spinklet</span> </a></li>
        <li> <a href="<?php echo base_url();?>superadmin/spinklet_list"> <span>Spinklet List</span> </a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
  
</aside>