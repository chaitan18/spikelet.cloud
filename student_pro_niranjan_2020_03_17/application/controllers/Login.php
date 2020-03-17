<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	function __construct() {
        parent::__construct();
        $this->load->database();
        $this->load->library('session');

        /* cache control */
        $this->output->set_header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
        $this->output->set_header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
        $this->output->set_header('Pragma: no-cache');
        $this->output->set_header("Expires: Mon, 26 Jul 2010 05:00:00 GMT");
    }

	public function index(){
		if($this->session->userdata('login_type') == 'SuperAdmin'){
    		redirect(base_url('superadmin'));
    	}else if($this->session->userdata('login_type') == 'Admin'){
    		redirect(base_url('admin'));
    	}else if($this->session->userdata('login_type') == 'Student'){				
    		redirect(base_url('student'));
    	}else if($this->session->userdata('login_type') == 'Parent'){             
            redirect(base_url('parentcontroller'));
        }

		$this->load->view('login');
	}

	public function check_login(){
		$username = $this->input->post('username');
		
		$checkuser = $this->db->where("(email = '".$username."' OR username = '".$username."')")->where('status', 1)->get('user');
        if($checkuser->num_rows() === 0) {
        	$this->session->set_flashdata('wr_user', 'Invalid Email/Username.');
            redirect($baseurl.'login');
        }
        
        $getData = $checkuser->row_array();
        $password = $this->input->post('password');
       

        $query = $this->db->where("(username = '".$username."' OR email = '".$username."') AND password = '$password'")->get('user');
       
        if($query->num_rows() > 0){
        	$row = $query->row();
        	if($row->role_id == 1){
        		$this->session->set_userdata('SuperAdmin', '1');
        	}
        	if($row->role_id == 2){
        		$this->session->set_userdata('Admin', '1');
        	}
        	if($row->role_id == 3){
        		$this->session->set_userdata('Student', '1');
        	}
            if($row->role_id == 5){
                $this->session->set_userdata('Parent', '1');
            }
            $this->session->set_userdata('login_user_id', $row->user_id);
            $this->session->set_userdata('name', $row->full_name);
            if($row->role_id == 1){
        		$this->session->set_userdata('login_type', 'SuperAdmin');
        	}
        	if($row->role_id == 2){
        		$this->session->set_userdata('login_type', 'Admin');
        	}
        	if($row->role_id == 3){
        		$this->session->set_userdata('login_type', 'Student');
        	}
            if($row->role_id == 5){
                $this->session->set_userdata('login_type', 'Parent');
            }            
            redirect('login/index');
        }else{
        	$this->session->set_flashdata('wr_password', 'Invalid Password.');
        	redirect(base_url('login'));
        }
	}

	function logout() {
        $this->session->sess_destroy();
        $this->session->set_flashdata('logout_notification', 'logged_out');
        redirect(base_url(), 'refresh');
    }
}
