<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

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
        $this->load->library('csvimport');
    }

	public function index(){
		if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$data['page_name'] = 'home';
        	$this->load->view('index', $data);
        }
	}

	public function add_subject(){
		if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$data['page_name'] = 'add_subject';
        	$this->load->view('index', $data);
        }
	}

    public function subject_list(){
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

            $this->db->select('subject_name, added_datetime');
            $this->db->where('spikelet_id', $get_spikelet_id['spikelet_id']);
            $subject_list = $this->db->get('subject_master')->result_array();

            $data['subject_list'] = $subject_list;
            $data['page_name'] = 'subject_list';
            $this->load->view('index', $data);
        }
    }    

	public function insert_subject()
	{
		if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
        	$subject_name = $_POST['subject_name'];
        	$subject_aliasname = $_POST['subject_aliasname'];

        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

        	if(count($get_spikelet_id) > 0){
        		$data = array(
	        		'subject_name' => $subject_name,
	        		'subject_alias' => $subject_aliasname,
	        		'spikelet_id' => $get_spikelet_id['spikelet_id'],
	        		'added_datetime' => date('Y-m-d H:i:s'),
	        		'ip_address' => $this->input->ip_address(),
	        		'status' => 1
	        	);

	        	$query = $this->db->insert('subject_master', $data);

	        	if($query){
	        		echo json_encode(array('status' => 1, 'message' => 'Subject Added Successfully.'));
	        	}else{
	        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
	        	}
        	}else{
        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
        	}
        }
	}

    public function topic_list(){
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

            $this->db->select('topic_name, subject_name, topic.added_datetime');
            $this->db->join('subject_master as subject', 'subject.subject_id = topic.subject_id');
            $this->db->where('topic.spikelet_id', $get_spikelet_id['spikelet_id']);
            $topic_list = $this->db->get('topic_master as topic')->result_array();

            $data['topic_list'] = $topic_list;
            $data['page_name'] = 'topic_list';
            $this->load->view('index', $data);
        }
    }

	public function add_topic(){
		if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();
        	$subject_list = $this->db->select('subject_id, subject_name')->where('spikelet_id', $get_spikelet_id['spikelet_id'])->where('status', 1)->get('subject_master')->result_array();

        	$data['subject_list'] = $subject_list;
        	$data['page_name'] = 'add_topic';
        	$this->load->view('index', $data);
        }
	}

	public function insert_topic()
	{
		if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
        	$topic_name = $_POST['topic_name'];
        	$topic_aliasname = $_POST['topic_aliasname'];
        	$subject = $_POST['subject'];

        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

        	if(count($get_spikelet_id) > 0){
        		$data = array(
	        		'topic_name' => $topic_name,
	        		'topic_alias' => $topic_aliasname,
	        		'subject_id' => $subject,
	        		'spikelet_id' => $get_spikelet_id['spikelet_id'],
	        		'added_datetime' => date('Y-m-d H:i:s'),
	        		'ip_address' => $this->input->ip_address(),
	        		'status' => 1
	        	);

	        	$query = $this->db->insert('topic_master', $data);

	        	if($query){
	        		echo json_encode(array('status' => 1, 'message' => 'Topic Added Successfully.'));
	        	}else{
	        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
	        	}
        	}else{
        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
        	}
        }
	}

    public function subtopic_list(){
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

            $this->db->select('topic_name, sub_topic_name, subject_name, topic.added_datetime');
            $this->db->join('subject_master as subject', 'subject.subject_id = subtopic.subject_id');
            $this->db->join('topic_master as topic', 'topic.topic_id = subtopic.topic_id');
            $this->db->where('topic.spikelet_id', $get_spikelet_id['spikelet_id']);
            $subtopic_list = $this->db->get('sub_topic_master as subtopic')->result_array();

            $data['subtopic_list'] = $subtopic_list;
            $data['page_name'] = 'subtopic_list';
            $this->load->view('index', $data);
        }
    }

	public function add_subtopic(){
		if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();
        	$topic_list = $this->db->select('topic_id, topic_name')->where('spikelet_id', $get_spikelet_id['spikelet_id'])->where('status', 1)->get('topic_master')->result_array();

        	$data['topic_list'] = $topic_list;
        	$data['page_name'] = 'add_subtopic';
        	$this->load->view('index', $data);
        }
	}

	public function insert_subtopic()
	{
		if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
        	$subtopic_name = $_POST['subtopic_name'];
        	$subtopic_aliasname = $_POST['subtopic_aliasname'];
        	$topic = $_POST['topic'];
        	$subject = $_POST['subject'];

        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();
        	
        	if(count($get_spikelet_id) > 0){
        		$data = array(
	        		'sub_topic_name' => $subtopic_name,
	        		'sub_topic_alias' => $subtopic_aliasname,
	        		'topic_id' => $topic,
	        		'subject_id' => $subject,
	        		'spikelet_id' => $get_spikelet_id['spikelet_id'],
	        		'added_datetime' => date('Y-m-d H:i:s'),
	        		'ip_address' => $this->input->ip_address(),
	        		'status' => 1
	        	);

	        	$query = $this->db->insert('sub_topic_master', $data);

	        	if($query){
	        		echo json_encode(array('status' => 1, 'message' => 'Sub Topic Added Successfully.'));
	        	}else{
	        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
	        	}
        	}else{
        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
        	}
        }
	}

	public function get_subjectbytopic()
	{
		if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
        	$topic = $_POST['topic'];

        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

        	$this->db->select('subject_master.subject_id, subject_master.subject_name');
        	$this->db->join('subject_master', 'subject_master.subject_id = topic_master.subject_id');
        	$this->db->where('topic_id', $topic)->where('topic_master.spikelet_id', $get_spikelet_id['spikelet_id']);
        	$get_subjectid = $this->db->get('topic_master')->result_array();

        	$result = array('subject' => $get_subjectid);

        	echo json_encode($result);
        	exit();
        }
	}

	public function add_quiz(){
		if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();
        	$topic_list = $this->db->select('topic_id, topic_name')->where('spikelet_id', $get_spikelet_id['spikelet_id'])->where('status', 1)->get('topic_master')->result_array();

        	$class_list = $this->db->select('class_id, class_name')->where('status', 1)->get('class_master')->result_array();

        	$data['class_list'] = $class_list;
        	$data['topic_list'] = $topic_list;
        	$data['page_name'] = 'add_quiz';
        	$this->load->view('index', $data);
        }
	}

    public function quiz_list(){
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

            $this->db->select('quiz_name, quiz_alias, subject_name, class_name, topic_name, sub_topic_name, quiz.added_datetime, no_of_questions');
            $this->db->from('quiz_master as quiz');
            $this->db->join('subject_master as subject', 'subject.subject_id = quiz.subject_id');
            $this->db->join('class_master as class', 'class.class_id = quiz.class_id');
            $this->db->join('topic_master as topic', 'topic.topic_id = quiz.topic_id');
            $this->db->join('sub_topic_master as subtopic', 'subtopic.sub_topic_id = quiz.sub_topic_id');
            $this->db->where('quiz.spikelet_id', $get_spikelet_id['spikelet_id']);
            $quiz_data = $this->db->get()->result_array();

            $data['quiz_data'] = $quiz_data;
            $data['page_name'] = 'quiz_list';
            $this->load->view('index', $data);
        }
    }

	public function get_subtopicbytopic()
	{
		if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
        	$topic = $_POST['topic'];

        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

        	$this->db->select('sub_topic_id, sub_topic_name');
        	$this->db->where('topic_id', $topic)->where('spikelet_id', $get_spikelet_id['spikelet_id']);
        	$get_subtopics = $this->db->get('sub_topic_master')->result_array();

        	$result = array('subtopic' => $get_subtopics);

        	echo json_encode($result);
        	exit();
        }
	}

	public function get_subjectbytopicandsubtopic()
	{
		if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
        	$topic = $_POST['topic'];
        	$subtopic = $_POST['subtopic'];

        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

        	$this->db->select('subject_master.subject_id, subject_master.subject_name');
        	$this->db->join('subject_master', 'subject_master.subject_id = sub_topic_master.subject_id');
        	$this->db->where('topic_id', $topic)->where('sub_topic_id', $subtopic)->where('sub_topic_master.spikelet_id', $get_spikelet_id['spikelet_id']);
        	$get_subjectid = $this->db->get('sub_topic_master')->result_array();

        	$result = array('subject' => $get_subjectid);

        	echo json_encode($result);
        	exit();
        }
	}

	public function insert_quiz()
	{
		if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
        	$quiz_name = $_POST['quizname'];
        	$quiz_alias = $_POST['quiz_aliasname'];
        	$topic = $_POST['topic'];
        	$subtopic = $_POST['subtopic'];
        	$subject = $_POST['subject'];
        	$class_id = $_POST['class'];

        	$get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();
        	
        	if(count($get_spikelet_id) > 0){
        		$data = array(
	        		'quiz_name' => $quiz_name,
	        		'quiz_alias' => $quiz_alias,
	        		'subject_id' => $subject,
	        		'class_id' => $class_id,
	        		'topic_id' => $topic,
	        		'sub_topic_id' => $subtopic,
	        		'spikelet_id' => $get_spikelet_id['spikelet_id'],
	        		'added_datetime' => date('Y-m-d H:i:s'),
	        		'ip_address' => $this->input->ip_address(),
	        		'no_of_questions' => 10,
	        		'status' => 1
	        	);

	        	$query = $this->db->insert('quiz_master', $data);

	        	if($query){
	        		echo json_encode(array('status' => 1, 'message' => 'Quiz Added Successfully.'));
	        	}else{
	        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
	        	}
        	}else{
        		echo json_encode(array('status' => 0, 'message' => 'Some thing went wrong please try after some time.'));
        	}
        }
	}

    public function questions_list(){
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

            $this->db->select('quiz_id, quiz_name');
            $this->db->where('spikelet_id', $get_spikelet_id['spikelet_id'])->where('status', 1);
            $quiz_list = $this->db->get('quiz_master')->result_array();

            $data['quiz_list'] = $quiz_list;
            $data['page_name'] = 'questions_list';
            $this->load->view('index', $data);
        }
    }

    public function getquestion_byquiz()
    {
        if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
            $quiz_val = $_POST['quiz_val'];

            $this->db->where('qz_id', $quiz_val)->where('status', 1);
            $question_list = $this->db->get('quiz_questions')->result_array();

            $result = array('status' => 1, 'question_list' => $question_list);

            echo json_encode($result);
            exit();
        }
    }

    public function add_questions($value='')
    {
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

            $this->db->select('quiz_id, quiz_name');
            $this->db->where('spikelet_id', $get_spikelet_id['spikelet_id'])->where('status', 1);
            $quiz_list = $this->db->get('quiz_master')->result_array();

            $data['quiz_list'] = $quiz_list;
            $data['page_name'] = 'add_questions';
            $this->load->view('index', $data);
        }
    }

    public function insert_question()
    {
        if ($this->session->userdata('Admin') != 1) {
           echo json_encode(array('status' => 0, 'message' => 'Session expired please login and try again.'));
        }else{
            $quiz_id = $_POST['quiz_id'];
            $question = $_POST['question'];
            $option1 = $_POST['option1'];
            $option2 = $_POST['option2'];
            $option3 = $_POST['option3'];
            $option4 = $_POST['option4'];
            $crt_option = $_POST['crt_option'];
            $crt_answer = $_POST['crt_answer'];
            $hint = $_POST['hint'];

            $data = array(
                'qz_id' => $quiz_id,
                'question' => $question,
                'option_1' => $option1,
                'option_2' => $option2,
                'option_3' => $option3,
                'option_4' => $option4,
                'correct_option' => $crt_option,
                'answer' => $crt_answer,
                'hint' => $hint,
                'added_datetime' => date('Y-m-d H:i:s'),
                'ip_address' => $this->input->ip_address(),
                'status' => 1
            );

            $query = $this->db->insert('quiz_questions', $data);

            if($query){
                $result = array('status' => 1, 'message' => 'Question Added Successfully.');
            }else{
                $result = array('status' => 0, 'message' => 'Some thing went wrong please try after some time.');
            }
            echo json_encode($result);
            exit();
        }
    }

    public function students_list()
    {
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $get_spikelet_id = $this->db->select('spikelet_id')->where('user_id', $this->session->userdata('login_user_id'))->where('status', 1)->get('spikelet_master')->row_array();

            $this->db->select('std.*, user.*, user.status as userstatus');
            $this->db->from('user');
            $this->db->join('student_details as std', 'std.user_id = user.user_id');
            $this->db->where('std.status', 1)->where('user.role_id', 3)->where('spikelet_id', $get_spikelet_id['spikelet_id']);            
            $spinklet_data = $this->db->get()->result_array();

            $data['students_list'] = $spinklet_data;
            $data['page_name'] = 'students_list';
            $this->load->view('index', $data);
        }
    }

    public function add_student()
    {
        if ($this->session->userdata('Admin') != 1) {
            $this->session->set_userdata('last_page', current_url());
            redirect(base_url(), 'refresh');
        }else{
            $class_list = $this->db->where('status', 1)->get('class_master')->result_array();

            $data['class_list'] = $class_list;
            $data['page_name'] = 'add_student';
            $this->load->view('index', $data);
        }
    }

    public function insert_student()
    {
        $baseurl = base_url();
        if($this->session->userdata('Admin') == '') {
            echo json_encode(array(
                'status' => 0,
                'msg' => 'Session Expired! Please login again to continue.'
            ));
            exit();
        }

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
        $insert_array['password'] = 'User@123';
        $insert_array['profile_image'] = 'default.png';
        $insert_array['role_id'] = 2;
        $insert_array['spikelet_ids'] = $get_spikelet_id['spikelet_id'];
        $insert_array['forgot_pass'] = NULL;
        $insert_array['date_added'] = date('Y-m-d H:i:s');
        $insert_array['ip_address'] = $this->input->ip_address();
        $insert_array['status'] = 1;

        if(isset($insert_array['class'])) unset($insert_array['class']);

        $query = $this->db->insert('user', $insert_array);

        if($query){
            $inserted_userid = $this->db->insert_id();
            $student_spinklet = array('user_id' => $inserted_userid, 'spikelet_id' => $get_spikelet_id['spikelet_id'], 'ip_address' => $this->input->ip_address(), 'user_insertion_id' => $this->session->userdata('login_user_id'),  'status' => 1);

            $student_spinklet_query = $this->db->insert('student_details', $student_spinklet);

            $student_class_query = $this->db->insert('std_class_details', array('user_id' => $inserted_userid, 'class_id' => $_POST['class'], 'added_date' => date('Y-m-d H:i:s'), 'ip_address' => $this->input->ip_address(), 'status' => 1));

            if($student_spinklet_query && $student_class_query){
                $result = array('status' => 1, 'msg' => 'Student Added Successfully.');
            }else{
                $result = array('status' => 0, 'msg' => 'Something went wrong please try after some time.');
            }
        }else{
            $result = array('status' => 0, 'msg' => 'Something went wrong please try after some time.');
        }

        echo json_encode($result);
        exit();
    }

    public function bulk_upload_questions(){

        $file_data = $this->csvimport->get_array($_FILES["questions_bulk_upload"]["tmp_name"]);
        if(!empty($file_data)){
            $select_quiz_hidden = $_POST["select_quiz_hidden"];
            if($select_quiz_hidden ==''){
                 $this->session->set_flashdata('error', 'Please Select Quiz Type');
                redirect('admin/questions_list');
            }
            $unique = str_replace(".","",microtime(true)).rand(000,999);
            foreach($file_data as $row)
            {
               $data[] = array(
                      'question' => $row["question"],
                      'option_1'  => $row["option_1"],
                      'option_2'   => $row["option_2"],
                      'option_3'   => $row["option_3"],
                      'option_4'   => $row["option_4"],
                      'correct_option'   => $row["correct_option"],
                      'answer'   => $row["answer"],
                      'hint'   => $row["hint"],
                      'qz_id'   => $_POST["select_quiz_hidden"],
                      'added_datetime' => date('Y-m-d H:i:s'),
                      'ip_address' => $this->input->ip_address(),
                      'status' => 1,
                      ' transaction_number'=>$unique 
               );
            }

            $query = $this->db->insert_batch('quiz_questions', $data);

            if($query){
                 $this->session->set_flashdata('success', 'Questions Added Successfully.');
                redirect('admin/questions_list');
            }else{
                $this->session->set_flashdata('error', 'Some thing went wrong. Please check the csv file!');
                redirect('admin/questions_list');
            }
        }else{
            $this->session->set_flashdata('error', 'Invalid file.');
                redirect('admin/questions_list');
        }
        
        
    }
}
