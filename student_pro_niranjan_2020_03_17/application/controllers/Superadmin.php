<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Superadmin extends CI_Controller {

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
	public function __construct() {
        parent::__construct();
        $this->load->database();
        $this->load->library('session');
    }

	public function index(){
		if ($this->session->userdata('SuperAdmin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$data['page_name'] = 'home';
        	$this->load->view('index', $data);
        }
	}

	public function register_spinklet()
	{
		if ($this->session->userdata('SuperAdmin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$data['page_name'] = 'add_spinklet';
        	$this->load->view('index', $data);
        }
	}

	public function insert_spinklet()
	{
		$baseurl = base_url();
		if($this->session->userdata('SuperAdmin') == '') {
			echo json_encode(array(
				'status' => 0,
				'msg' => 'Session Expired! Please login again to continue.'
			));
			exit();
		}


		$insert_array = array();

		foreach ($_POST as $key => $field) {			
			if($field == ''){
				$insert_array[$key] = NULL;
			}else{
				$insert_array[$key] = $field;
			}
		}

		$insert_array['dob'] = NULL;
		$insert_array['password'] = 'User@123';
		$insert_array['profile_image'] = 'default.png';
		$insert_array['role_id'] = 2;
		$insert_array['spikelet_ids'] = NULL;
		$insert_array['forgot_pass'] = NULL;
		$insert_array['date_added'] = date('Y-m-d H:i:s');
		$insert_array['ip_address'] = $this->input->ip_address();
		$insert_array['status'] = 1;

		if(isset($insert_array['spinkletname'])) unset($insert_array['spinkletname']);
		if(isset($insert_array['spinkletaliasname'])) unset($insert_array['spinkletaliasname']);

		$query = $this->db->insert('user', $insert_array);

		if($query){
			$spinklet_data = array('spikelet_name' => $_POST['spinkletname'], 'spikelet_alias' => $_POST['spinkletaliasname'], 'cost_of_product' => 2500, 'user_id' => $this->db->insert_id(), 'status' => 1);

			$spinkletquery = $this->db->insert('spikelet_master', $spinklet_data);

			if($spinkletquery){
				$result = array('status' => 1, 'msg' => 'Spinklet added successfully.');
			}else{
				$result = array('status' => 0, 'msg' => 'Something went wrong please try after some time.');
			}
		}else{
			$result = array('status' => 0, 'msg' => 'Something went wrong please try after some time.');
		}

		echo json_encode($result);
		exit();
	}


	public function spinklet_list()
	{
		if ($this->session->userdata('SuperAdmin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$this->db->select('spikelet_master.*, user.*, user.status as userstatus');
        	$this->db->from('user');
        	$this->db->join('spikelet_master', 'spikelet_master.user_id = user.user_id');
        	$this->db->where('spikelet_master.status', 1)->where('user.role_id', 2);
        	$spinklet_data = $this->db->get()->result_array();

        	$data['spinklet_list'] = $spinklet_data;
        	$data['page_name'] = 'spinklet_list';
        	$this->load->view('index', $data);
        }
	}

	public function get_userdetails()
	{
		$baseurl = base_url();
		if($this->session->userdata('SuperAdmin') == '') {
			echo json_encode(array(
				'status' => 0,
				'msg' => 'Session Expired! Please login again to continue.'
			));
			exit();
		}

		$user_id = $_POST['user_id'];

		$this->db->select('full_name, user.status, spikelet_name, user.user_id')->where('user.user_id', $user_id);
		$this->db->join('spikelet_master', 'spikelet_master.user_id = user.user_id');
		$get_user_data = $this->db->get('user')->row_array();

		$result = array('status' => 1, 'get_user_data' => $get_user_data);

		echo json_encode($result);
		exit();
	}

	public function update_userstatus()
	{
		$baseurl = base_url();
		if($this->session->userdata('SuperAdmin') == '') {
			echo json_encode(array(
				'status' => 0,
				'msg' => 'Session Expired! Please login again to continue.'
			));
			exit();
		}

		$user_id = $_POST['user_id'];
		$user_status = $_POST['user_status'];

		if($user_status == 'active'){
			$status = 1;
		}else{
			$status = 0;
		}

		$data = array('status' => $status);

		$this->db->where('user_id', $user_id);
		$query = $this->db->update('user', $data);

		if($query){
			$result = array('status' => 1, 'msg' => 'Status updated successfully.');
		}else{
			$result = array('status' => 0, 'msg' => 'Something went wrong please try after some time.');
		}

		echo json_encode($result);
		exit();
	}
}
