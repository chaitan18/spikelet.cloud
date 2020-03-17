<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Student extends CI_Controller {

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
	 
		 
	public function __construct(){
		parent::__construct();
		$this->load->database();
		$this->load->model('Student_Model'); 
		$this->load->library('session');		 
	}

	public function index(){	
		if ($this->session->userdata('Student') != 1) {
			redirect(base_url(), 'refresh');
		} else {			 
		
			$data['page_name'] = 'home';
			$data['spikelets']= $this->Student_Model->getSpikeletDetails();
        	$this->load->view('index', $data);
		}
	}
        
		
	public function getQuizs() {
		if ($this->session->userdata('Student') == 1) {			 
			$spikelet_id = $this->uri->segment(3);
			$subject_id = $this->uri->segment(4);
			$topics = $this->uri->segment(5);
			//echo $spikelet_id."-".$subject_id."-". $topics; 
			$std_class_id = $this->db->select('class_id')->where('user_id', $this->session->userdata('login_user_id'))->get('std_class_details')->row_array();

			$params['spikelet_id'] = $spikelet_id;
			$params['subject_id'] = $subject_id;
			$params['topics'] = $topics;
			$spikeletName = $this->Student_Model->getSpikeletNameById($params); 
			$subtopicsQuizs =$this->Student_Model->getQuizs($params,$std_class_id); 
			$subject_name=$this->Student_Model->getSubjectName($params);
			$topicslist = $this->Student_Model->getTopics($params,$std_class_id);
			// $this->load->view('student/student_TopicsQuizsHome', array('childrenResult'=>$childrenResult,'studentDetails' => $data, 'exams_data' =>$examsArray,'admission_type_data'=>$admission_type_data,'student_type_data'=>$student_type_data,'height_Details'=>$height_Details,'academic_year'=>$academic_year,'circularsdata'=>$circularsdata,'schoolnews'=>$schoolnews,'postanote'=>$postanote ) );
			$result = array('page_name' => 'student_TopicsQuizsHome', 'quizdata'=>$subtopicsQuizs, 'subjectname'=>$subject_name,'topicslist'=>$topicslist, 'spikelet_id'=>$spikelet_id, 'subject_id'=>$subject_id, 'class_id'=>$std_class_id['class_id'], 'spikeletName'=>$spikeletName);

			//$this->load->view('student/student_TopicsQuizsHome', $result);
        	$this->load->view('index', $result);
         } else {
            //  $branches = $this->ParentModel->get_branches_details();
			$this->load->view('login');
         }

	}	
		
	public function getSubTopics() {
		if ($this->session->userdata('Student') == 1) {
			$spikelet_id = $this->input->post('spikelet_id');
			$subject_id = $this->input->post('subject_id');
			$topics = $this->input->post('topic_id');
			$class_id=$this->input->post('classid');
			//echo $spikelet_id."-".$subject_id."-". $topics; 
			//$studentData=$this->session->userdata();
			$params['spikelet_id'] = $spikelet_id;
			$params['subject_id'] = $subject_id;
			$params['topics'] = $topics;
			$params['class_id'] = $class_id;
			$subtopics=$this->Student_Model->getSubtopics($params); 
			echo json_encode($subtopics);
			exit();
			// $this->load->view('student/student_TopicsQuizsHome', array('childrenResult'=>$childrenResult,'studentDetails' => $data, 'exams_data' =>$examsArray,'admission_type_data'=>$admission_type_data,'student_type_data'=>$student_type_data,'height_Details'=>$height_Details,'academic_year'=>$academic_year,'circularsdata'=>$circularsdata,'schoolnews'=>$schoolnews,'postanote'=>$postanote ) ); 
			//$this->load->view('student/student_TopicsQuizsHome',array('quizdata'=>$subtopicsQuizs,'subjectname'=>$subject_name,'topicslist'=>$topicslist,'spikelet_id'=>$spikelet_id,'subject_id'=>$subject_id,'class_id'=>$studentData['class_id']));
        } else {
            //  $branches = $this->ParentModel->get_branches_details();
			$this->load->view('login');
        }
	}	
	
	public function getQuiz() {
		if ($this->session->userdata('Student') == 1) {
			 
			$spikelet_id = $this->input->post('spikelet_id');
			$subject_id = $this->input->post('subject_id');
			$topics = $this->input->post('topic_id');
			$subtopic_id=$this->input->post('subtopic_id');
			$class_id=$this->input->post('classid');
			//echo $spikelet_id."-".$subject_id."-". $topics; 
			  //$studentData=$this->session->userdata();
			  $params['spikelet_id'] = $spikelet_id;
			  $params['subject_id'] = $subject_id;
			  $params['topics'] = $topics;
			   $params['subtopic_id'] = $subtopic_id;
			  $params['class_id'] = $class_id;
			  $quizs=$this->Student_Model->getQuiz($params); 
			  
			 echo json_encode($quizs);
			// $this->load->view('student/student_TopicsQuizsHome', array('childrenResult'=>$childrenResult,'studentDetails' => $data, 'exams_data' =>$examsArray,'admission_type_data'=>$admission_type_data,'student_type_data'=>$student_type_data,'height_Details'=>$height_Details,'academic_year'=>$academic_year,'circularsdata'=>$circularsdata,'schoolnews'=>$schoolnews,'postanote'=>$postanote ) ); 
			//$this->load->view('student/student_TopicsQuizsHome',array('quizdata'=>$subtopicsQuizs,'subjectname'=>$subject_name,'topicslist'=>$topicslist,'spikelet_id'=>$spikelet_id,'subject_id'=>$subject_id,'class_id'=>$studentData['class_id']));
			           
         } else {
         
              //  $branches = $this->ParentModel->get_branches_details();
				$this->load->view('login');
         }
		 
	}
	
	public function takeQuiz() {
		if ($this->session->userdata('Student') == 1) {
			$spikelet_id = $this->input->post('spikelet_id');
			$subject_id = $this->input->post('subject_id');
			$topics = $this->input->post('topic_id');
			$subtopic_id=$this->input->post('subtopic_id');
			$class_id=$this->input->post('classid');
			$quiz_id=$this->input->post('quiz_id');
			
			//echo $spikelet_id."-".$subject_id."-". $topics; 
			//$studentData=$this->session->userdata();
			$params['spikelet_id'] = $spikelet_id;
			$params['subject_id'] = $subject_id;
			$params['topics'] = $topics;
			$params['subtopic_id'] = $subtopic_id;
			$params['class_id'] = $class_id;
			$params['quiz_id'] = $quiz_id;
			$studentData = $this->session->userdata();
			$studid = $studentData['login_user_id'];
			$params['studid'] = $studid;
			$quizTakenStatus = $this->Student_Model->quizTakenStatus($params);
			$quizcount= count($quizTakenStatus);
			if($quizcount==0){
				$question_no= 1;
				$quizQuestions=$this->Student_Model->getQuizQuestions($params);
				$data['question_no']= $question_no;
				$data['question']= $quizQuestions;
				$data['std_id']=$params['studid'];
				$data['status']="ok";
				$data['message']="Quiz Started";
				$setStatus = $this->Student_Model->setStdQuizStatus($params,1);
				echo json_encode($data);
			}else{
				$qstatus;
				foreach($quizTakenStatus as $qzTakenStatus){
					$qstatus = $qzTakenStatus['attmped_status']; 
				}
				if($qstatus==1){
					$question_count = $this->db->where('student_id', $this->session->userdata('login_user_id'))->where('qz_id', $quiz_id)->where('option_status', 1)->get('quiz_answered')->num_rows();
					$questioncount_assigntest = $this->db->select('no_of_questions')->where('quiz_id', $quiz_id)->get('quiz_master')->row_array();
					if($question_count == $questioncount_assigntest['no_of_questions']){
						$data['status'] = 0;
					   	$data['message']="Quiz already taken, Thanks";
					   	$data['examstatus'] = 1;
						echo json_encode($data);
					}else{
						$quizQuestions=$this->Student_Model->getQuizQuestions($params);
						if($quizQuestions == NULL){
							$data['status'] = 0;
						   	$data['message']="Insufficent question please contact Administrator";
							echo json_encode($data);
						}else{
							$data['question_no'] = $question_count+1;
						   	$data['question'] = $quizQuestions;
						   	$data['std_id'] = $params['studid'];
						   	$data['status'] = 1;
						   	$data['message'] = "Quiz Incomplete";
						   	$data['ques_count'] = $questioncount_assigntest['no_of_questions'];
						  	echo json_encode($data);
						}
					}						
				}else{
					$data['status'] = 0;
				   	$data['message']="Quiz already taken, Thanks";
				   	$data['examstatus'] = 1;
					echo json_encode($data);
				}
			}
			exit();
			//$quizs=$this->Student_Model->($params); 
			  
			//echo json_encode($quizs);
			// $this->load->view('student/student_TopicsQuizsHome', array('childrenResult'=>$childrenResult,'studentDetails' => $data, 'exams_data' =>$examsArray,'admission_type_data'=>$admission_type_data,'student_type_data'=>$student_type_data,'height_Details'=>$height_Details,'academic_year'=>$academic_year,'circularsdata'=>$circularsdata,'schoolnews'=>$schoolnews,'postanote'=>$postanote ) ); 
			//$this->load->view('student/student_TopicsQuizsHome',array('quizdata'=>$subtopicsQuizs,'subjectname'=>$subject_name,'topicslist'=>$topicslist,'spikelet_id'=>$spikelet_id,'subject_id'=>$subject_id,'class_id'=>$studentData['class_id']));
			           
        } else {
         	//  $branches = $this->ParentModel->get_branches_details();
			$this->load->view('login');
        }
	}

	public function submitanswer()
	{
		if ($this->session->userdata('Student') == 1) {
			$student_id = $_POST['student_id'];
			$qz_id = $_POST['qz_id'];
			$question_id = $_POST['question_id'];
			$opted_option = $_POST['opted_option'];

			$data = array(
				'student_id' => $student_id,
				'qz_id' => $qz_id,
				'question_id' => $question_id,
				'opted_option' => $opted_option,
				'option_status' => 1,
				'date_time' => date('Y-m-d H:i:s'),
				'book_mark' => 0
			);

			$query = $this->db->insert('quiz_answered', $data);

			if($query){
				echo json_encode(array(
					'status' => 1
				));
				exit();
			}else{
				echo json_encode(array(
					'status' => 0,
					'msg' => 'Some thing went wrong please try after some time.'
				));
				exit();
			}
		}else{
			echo json_encode(array(
				'status' => 0,
				'msg' => 'Your session has ended. Please login again to submit your answer.'
			));
			exit();
		}
	}

	public function submitquiz()
	{
		if ($this->session->userdata('Student') == 1) {
			$student_id = $_POST['student_id'];
			$qz_id = $_POST['qz_id'];
			$question_id = $_POST['question_id'];
			$opted_option = $_POST['opted_option'];

			$data = array(
				'student_id' => $student_id,
				'qz_id' => $qz_id,
				'question_id' => $question_id,
				'opted_option' => $opted_option,
				'option_status' => 1,
				'date_time' => date('Y-m-d H:i:s'),
				'book_mark' => 0
			);

			$query = $this->db->insert('quiz_answered', $data);

			if($query){
				$submitquiz_data = array(
					'attmped_status' => 2
				);
				$this->db->where('student_id', $student_id)->where('qz_id', $qz_id);
				$updatequery = $this->db->update('quiz_attempted_std_status', $submitquiz_data);

				if($updatequery){
					echo json_encode(array(
						'status' => 1,
						'msg' => 'Quiz data has been submitted successfully'
					));
					exit();
				}else{
					echo json_encode(array(
						'status' => 0,
						'msg' => 'Some thing went wrong please try after some time.'
					));
					exit();
				}
			}else{
				echo json_encode(array(
					'status' => 0,
					'msg' => 'Some thing went wrong please try after some time.'
				));
				exit();
			}
		}else{
			echo json_encode(array(
				'status' => 0,
				'msg' => 'Your session has ended. Please login again to submit your answer.'
			));
			exit();
		}
	}

	public function examspage()
	{
		if ($this->session->userdata('Student') == 1) {
			$spikeletids =   $this->session->userdata('spikelet_ids');

			$std_spikelet_ids = $this->db->select('spikelet_ids')->where('user_id', $this->session->userdata('login_user_id'))->get('user')->row_array();

			$std_class_id = $this->db->select('class_id')->where('user_id', $this->session->userdata('login_user_id'))->get('std_class_details')->row_array();

			$data = array(
				'std_id' => $this->session->userdata('login_user_id'),
				'spikelet_ids'    =>  $std_spikelet_ids['spikelet_ids'],
				'class_id' => $std_class_id['class_id']
			);
			$dataarray = $this->Student_Model->getSpikeleteData($data);			

			$data['page_name'] = 'student_dashboard';
			$data['spikeletids'] = $spikeletids;
			$data['dataarray'] = $dataarray;
        	$this->load->view('index', $data);
		}else{
			$this->load->view('login');
		}		
	}
	
	public function getQuizReport(){
		if ($this->session->userdata('Student') == 1) {
			$quiz_id =  $_POST['quiz_id'];
			$sql = "SELECT SUM(CASE WHEN qa.`opted_option`= qq.`correct_option` THEN 1 ELSE 0 END )AS answer_status, SUM(CASE WHEN qa.`opted_option`= qq.`correct_option` THEN 0 ELSE 1 END )AS worng_answer_status, SUM(CASE WHEN qa.`option_status`= 1 THEN 1 ELSE 0 END)AS questions_attempted FROM `quiz_answered` as qa ,`quiz_questions` as qq WHERE qa.`student_id`=".$this->session->userdata('login_user_id')." and qa.`qz_id`=".$quiz_id." and qq.`qz_id`=qa.`qz_id` and qq.`question_id`=qa.`question_id` ";
			
			$data = $this->db->query($sql);
		 	$data->result();	
		 	echo json_encode( $data->result());
			/*	$data['page_name'] = 'student_dashboard';
			$data['dataarray'] = $dataarray;
        	$this->load->view('index', $data);*/
		}else{
			$this->load->view('login');
		}		
	}
	
	public function add_to_cart() {
		$spikelet_id = $_POST['spikelet_id'];
		$spikelet_name = $_POST['spikelet_name'];
		$spikelet_cost = $_POST['spikelet_cost'];
		// Whenever a user adds an item to their cart, pull out any they already have in there
		$cart_products = $this->session->userdata('cart_products');
		// Add the new item
		$data = array( 'spikelet_id'=>$spikelet_id,
			'spikelet_name'=>$spikelet_name,
			'spikelet_cost'=>$spikelet_cost
		);
		$cart_products[] = $data;
		// And put it back into the session
		$this->session->set_userdata('cart_products', $cart_products);
		$data['cartItemsNo'] = count($cart_products);
		$data['cart_products'] = $cart_products;
		echo json_encode($data);
		exit();
	}
	
	public function goToCart() {
		// Whenever a user adds an item to their cart, pull out any they already have in there
		$cart_products = $this->session->userdata('cart_products');
		// And put it back into the session
		$this->session->set_userdata('cart_products', $cart_products);
		$data['cartItemsNo'] = count($cart_products);
		$data['cart_products'] = $cart_products;
		//echo json_encode($data);
		$data['page_name']='cartpage';
		$this->load->view('index', $data);
	} 	
	
	public function removefromcart() {
		$spikelet_id = $this->uri->segment(3);
		$spikelet_name = $this->uri->segment(4);
		$spikelet_cost = $this->uri->segment(5);
		$data = array( 'spikelet_id'=>$spikelet_id,
				'spikelet_name'=>$spikelet_name,
				'spikelet_cost'=>$spikelet_cost
			);
		// Whenever a user adds an item to their cart, pull out any they already have in there
		$cart_products = $this->session->userdata('cart_products');
		foreach ($cart_products as $key => $val){
			if ($val["spikelet_id"] == $spikelet_id ) {
				unset($cart_products[$key]);
			}
		}
		// And put it back into the session
		$this->session->set_userdata('cart_products', $cart_products);
		$data['cartItemsNo'] = count($cart_products);
		$data['cart_products'] = $cart_products;
		//echo json_encode($data);
		$data['page_name']='cartpage';
		$this->load->view('index', $data);
	} 
	
	public function goforpayment() {
		if ($this->session->userdata('Student') == 1) {
			$data['page_name'] = 'paymentpage';
			$cart_products = $this->session->userdata('cart_products');
			
			$data['cart_products'] = $cart_products;
       		$this->load->view('index', $data);
		}else{
			//$data['page_name'] = 'paymentpage';
			$this->load->view('login');
		}		
	}

	public function pay() {
		if ($this->session->userdata('Student') == 1) {
			$cart_products = $this->session->userdata('cart_products');
			$plans="";
			 
			foreach($cart_products as $plan){
				$plans.=$plan['spikelet_id']."-";
			}
			$plans = trim(preg_replace("![^a-z0-9]+!i", "-", $plans), '-');
			$student_id = $_POST['student_id'];
			$cardNo = $_POST['cardNo'];
			$cvv = $_POST['cvv'];
			$total_amount = $_POST['total_amount'];
			$data= array( 'payment_id'=>$cardNo ,
				'amount'=>$total_amount,
				'student_id'=> $student_id,
				'spekelet_id'=>$plans,
				'payment_status'=>1
			);
			if( $plans==""){
				echo json_encode(array(
					'status' => 0,
					'msg' => 'Plans are Empty.'
				));
				exit();
			}
			$query = $this->db->insert('student_plan', $data);
			if($query){
				$this->db->set('spikelet_ids',$plans);
				$this->db->where('user_id',$student_id);
				$this->db->update('user');
				//$updatequery = $this->db->update()
				$cart_products= array();
				$this->session->set_userdata('cart_products', $cart_products);
				echo json_encode(array(
					'status' => 1,
					'msg' => 'Payment was Successful and Use your plans.'
				));
				exit();
			}else{
				echo json_encode(array(
					'status' => 0,
					'msg' => 'Some thing went wrong please try after some time.'
				));
				exit();
			}
			 
		}else{
			 
			$this->load->view('login');
		}		
	} 
}