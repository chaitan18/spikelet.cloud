<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Parentcontroller extends CI_Controller {

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
		if ($this->session->userdata('Parent') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$data['page_name'] = 'home';
        	$this->load->view('index', $data);
        }
	}

	public function add_child()
    {
        if ($this->session->userdata('Parent') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $class_list = $this->db->where('status', 1)->get('class_master')->result_array();

            $data['class_list'] = $class_list;
            $data['page_name'] = 'add_child';
            $this->load->view('index', $data);
        }
    }

    public function insert_child()
    {
        $baseurl = base_url();
        if($this->session->userdata('Parent') == '') {
            echo json_encode(array(
                'status' => 0,
                'msg' => 'Session Expired! Please login again to continue.'
            ));
            exit();
        }

        $parent_id = $this->session->userdata('login_user_id');

        $insert_array = array();

        foreach ($_POST as $key => $field) {            
            if($field == ''){
                $insert_array[$key] = NULL;
            }else{
                $insert_array[$key] = $field;
            }
        }

        $insert_array['dob'] = NULL;
        $insert_array['password'] = 'Child@123';
        $insert_array['profile_image'] = 'default.png';
        $insert_array['role_id'] = 2;
        $insert_array['spikelet_ids'] = NULL;
        $insert_array['forgot_pass'] = NULL;
        $insert_array['date_added'] = date('Y-m-d H:i:s');
        $insert_array['ip_address'] = $this->input->ip_address();
        $insert_array['status'] = 1;

        if(isset($insert_array['class'])) unset($insert_array['class']);

        $query = $this->db->insert('user', $insert_array);

        if($query){
            $inserted_userid = $this->db->insert_id();

            $child_array = array('parent_id' => $parent_id, 'child_id' => $inserted_userid, 'added_date' => date('Y-m-d H:i:s'), 'added_by' => $parent_id, '	ip_address' => $this->input->ip_address(), 'status' => 1);

            $mapping_child_toparent = $this->db->insert('parent_child_info', $child_array);

            $student_class_query = $this->db->insert('std_class_details', array('user_id' => $inserted_userid, 'class_id' => $_POST['class'], 'added_date' => date('Y-m-d H:i:s'), 'ip_address' => $this->input->ip_address(), 'status' => 1));

            if($student_class_query && $mapping_child_toparent){
                $result = array('status' => 1, 'msg' => 'Child Added Successfully.');
            }else{
                $result = array('status' => 0, 'msg' => 'Child Added Successfully and went wrong while mapping child to parent or adding class to child.');
            }
        }else{
            $result = array('status' => 0, 'msg' => 'Something went wrong please try after some time.');
        }

        echo json_encode($result);
        exit();
    }

    public function child_list()
    {
    	$baseurl = base_url();
        if($this->session->userdata('Parent') == '') {
            echo json_encode(array(
                'status' => 0,
                'msg' => 'Session Expired! Please login again to continue.'
            ));
            exit();
        }

        $parent_id = $this->session->userdata('login_user_id');

        $parent_info = $this->db->where('user_id', $parent_id)->where('status', 1)->get('user')->row_array();

       	$this->db->select('*');
        $this->db->from('user');
        $this->db->join('parent_child_info as child_info', 'child_info.child_id = user.user_id');
        $this->db->where('parent_id', $parent_id);
        $this->db->where('user.status', 1);
        $this->db->where('child_info.status', 1);
        $parent_child_info = $this->db->get()->result_array();

        $data['parent_child_info'] = $parent_child_info;
        $data['parent_info'] = $parent_info;
        $data['page_name'] = 'child_list';
        $this->load->view('index', $data);       
    }
}
