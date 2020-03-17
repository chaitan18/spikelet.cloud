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
               
       <!--  <li>
          <a href="pages/widgets.html">
            <i class="fa fa-th"></i> <span>Menu 1</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>   -->           
        <!-- <li class="treeview">
          <a href="#">
            <i class="fa fa-share"></i> <span>Master</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="<?php echo base_url(); ?>admin/add_topic"><i class="fa fa-circle-o"></i> Add Topic</a></li>
            <li><a href="<?php echo base_url(); ?>admin/add_subtopic"><i class="fa fa-circle-o"></i> Add Sub topic</a></li>
            <li><a href="<?php echo base_url(); ?>admin/add_quiz"><i class="fa fa-circle-o"></i> Add Quiz</a></li>
            <li><a href="<?php echo base_url(); ?>admin/add_subject"><i class="fa fa-circle-o"></i> Add Subject</a></li>           
          </ul>
        </li> -->
        <li class="treeview active">
          <a href="#">
            <i class="fa fa-share"></i> <span>Master</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu menu-open" style="display: block;">
            <li class="<?php echo ($this->uri->segment(2) == 'add_subject' || $this->uri->segment(2) == 'subject_list') ? 'active' : ''; ?>">
              <a href="#"><i class="fa fa-circle-o"></i> Subject
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu <?php echo ($this->uri->segment(2) == 'add_subject' || $this->uri->segment(2) == 'subject_list') ? 'menu-open' : ''; ?>">
                <li><a href="<?php echo base_url(); ?>admin/subject_list"><i class="fa fa-circle-o"></i> Subject List</a></li>
                <li><a href="<?php echo base_url(); ?>admin/add_subject"><i class="fa fa-circle-o"></i> Add Subject</a></li>
              </ul>
            </li>

            <li class="">
              <a href="#"><i class="fa fa-circle-o"></i> Topic
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu" style="display: none;">
                <li><a href="<?php echo base_url(); ?>admin/topic_list"><i class="fa fa-circle-o"></i> Topic List</a></li>
                <li><a href="<?php echo base_url(); ?>admin/add_topic"><i class="fa fa-circle-o"></i> Add Topic</a></li>
              </ul>
            </li>

            <li class="">
              <a href="#"><i class="fa fa-circle-o"></i> Sub Topic
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu" style="display: none;">
                <li><a href="<?php echo base_url(); ?>admin/subtopic_list"><i class="fa fa-circle-o"></i> Sub Topic List</a></li>
                <li><a href="<?php echo base_url(); ?>admin/add_subtopic"><i class="fa fa-circle-o"></i> Add Sub Topic</a></li>
              </ul>
            </li>

            <li class="">
              <a href="#"><i class="fa fa-circle-o"></i> Quiz
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu" style="display: none;">
                <li><a href="<?php echo base_url(); ?>admin/quiz_list"><i class="fa fa-circle-o"></i> Quiz List</a></li>
                <li><a href="<?php echo base_url(); ?>admin/add_quiz"><i class="fa fa-circle-o"></i> Add Quiz</a></li>
              </ul>
            </li>

            <li class="">
              <a href="#"><i class="fa fa-circle-o"></i> Questions
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu" style="display: none;">
                <li><a href="<?php echo base_url(); ?>admin/questions_list"><i class="fa fa-circle-o"></i> Questions List</a></li>
                <li><a href="<?php echo base_url(); ?>admin/add_questions"><i class="fa fa-circle-o"></i> Add Questions</a></li>
              </ul>
            </li>

            <li class="">
              <a href="#"><i class="fa fa-circle-o"></i> Students
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu" style="display: none;">
                <li><a href="<?php echo base_url(); ?>admin/students_list"><i class="fa fa-circle-o"></i> Students List</a></li>
                <li><a href="<?php echo base_url(); ?>admin/add_student"><i class="fa fa-circle-o"></i> Add Students</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  
</aside>