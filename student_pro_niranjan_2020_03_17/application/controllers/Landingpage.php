<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Landingpage extends CI_Controller {

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
		$this->load->model('Student_Model'); 
		 
    }

	public function index(){		
    	$data['page_name'] = 'home';
		$data['spikelets']= $this->Student_Model->getSpikeletDetails();
       	$this->session->set_userdata('login_type', 'Landingpage');	 
    	$this->load->view('index', $data);
	}


	public function register_parent()
	{
		$data['page_name'] = 'register_parent';
		$data['spikelets']= $this->Student_Model->getSpikeletDetails();
       	$this->session->set_userdata('login_type', 'Landingpage');	 
    	$this->load->view('index', $data);
	}

	public function insert_parent()
    {
        $baseurl = base_url();

        $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

        $insert_array = array();

        foreach ($_POST as $key => $field) {            
            if($field == ''){
                $insert_array[$key] = NULL;
            }else{
                $insert_array[$key] = $field;
            }
        }

        $insert_array['dob'] = NULL;
        $insert_array['password'] = 'Parent@123';
        $insert_array['profile_image'] = 'default.png';
        $insert_array['role_id'] = 5;
        $insert_array['spikelet_ids'] = $get_spikelet_id['spikelet_id'];
        $insert_array['forgot_pass'] = NULL;
        $insert_array['date_added'] = date('Y-m-d H:i:s');
        $insert_array['ip_address'] = $this->input->ip_address();
        $insert_array['status'] = 1;

        $query = $this->db->insert('user', $insert_array);

        if($query){
           	$result = array('status' => 1, 'msg' => 'Parent Added Successfully.');
        }else{
            $result = array('status' => 0, 'msg' => 'Something went wrong please try after some time.');
        }

        echo json_encode($result);
        exit();
    }
}
