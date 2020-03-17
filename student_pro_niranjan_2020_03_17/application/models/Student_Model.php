<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Student_Model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function add_user($user)
	{
		return $this->db->insert('users', $user);
	}
	public function get_branches_details() {
		$sql="SELECT * FROM `branch_details` WHERE 1";
		$data=$this->db->query($sql);
		return $data->result();
	}
	public function checkLogin($params)
	{
		//print_r($params);exit;
	 
		$this->db->select('*');
		$this->db->where('user_name', $params['user_name']);
		$this->db->where('password', $params['password']);
		$q = $this->db->get( 'student',1);
		return $q->result_array();
	 } 
	 //return false;
	

	public function get_total_children_details($params) {
		$db_name = $params['db_name'];
		$sql = "SELECT * FROM $db_name.student_current_details sc
				INNER JOIN $db_name.student_details s on sc.admission_number = s.admission_number and sc.parent_ac_id = s.parent_ac_id
				WHERE s.primary_mobile_number =".$params['parent_mobile_number'];
		$data = $this->db->query($sql);
		return $data->result();	
	}
	
	
	public function getSpikeleteData($params) {
		if( isset($params['spikelet_ids']) && !empty($params['spikelet_ids'])) {
			$spikelete_ids = explode("-",$params['spikelet_ids']);
			$idscount=count($spikelete_ids);
			foreach($spikelete_ids as $spikelete_id){
			$sql = "select distinct sm.`spikelet_id`,sm.`spikelet_name`,sbm.`subject_id`,sbm.`subject_name` from spikelet_master as sm,`quiz_master`  as qm,`subject_master` as  sbm where sm.spikelet_id=".$spikelete_id."  and qm.`class_id`=".$params['class_id']." and qm.`spikelet_id`=sm.spikelet_id  and sbm.`subject_id`=qm.`subject_id`";
			$q  =$this->db->query($sql);
			 $results=$q->result_array();
			// $data[] =$results;
			 foreach($results as $result){
				$data =array();
				$topicssql="SELECT distinct tm.`topic_id`,tm.`topic_name` FROM `quiz_master` as qm,topic_master as tm WHERE  qm.`subject_id`=".$result['subject_id']." and qm.`class_id`=".$params['class_id']." and tm.`topic_id`=qm.`topic_id`";
				$topicquery = $this->db->query($topicssql);
				$data['spikelet_id']=$result['spikelet_id'];
				$data['spikelet_name']=$result['spikelet_name'];
				$data['subject_id']=$result['subject_id'];
				$data['subject_name']=$result['subject_name'];
				$data['topics']=$topicquery->result_array();
				$dataarray[]=$data;
			 }
			}
			//$dataarray[]=$data;
			return $dataarray;
		}else{
			
			return "No Data";
		}
	} 
	
	
	
	public function getSpikeletNameById($params) {
		 
		 
				$this->db->select('spikelet_name');
				$this->db->from('spikelet_master');
				$this->db->where('spikelet_id',$params['spikelet_id']);
		 
				return $this->db->get()->row()->spikelet_name;
		 
	}
	
	public function getQuizs($params,$studentData) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {
			/*$sql = "SELECT *,count(qm.quiz_id) as no_of_quizs FROM `quiz_master`as qm ,`subject_master` as sm,`class_master` as cm, `topic_master` as tm  WHERE qm.`spikelet_id`=".$params['spikelet_id']." and qm.`class_id`=".$studentData['class_id']." and qm.`subject_id`=".$params['subject_id']." and qm.`topic_id`= ".$params['topics']." and sm.`subject_id`=qm.`spikelet_id` and cm.`class_id` =qm.`class_id` and tm.`topic_id` =qm.`topic_id`";
			$q  =$this->db->query($sql);
			 $results=$q->result_array();*/
			$this->db->select('count(qm.quiz_id) as no_of_quizs, tm.topic_name');
			$this->db->from('quiz_master as qm');
			$this->db->join('subject_master as sm', 'sm.subject_id = qm.spikelet_id');
			$this->db->join('class_master as cm', 'cm.class_id = qm.class_id');
			$this->db->join('topic_master as tm', 'tm.topic_id = qm.topic_id');
			$this->db->where('qm.spikelet_id', $params['spikelet_id'])->where('qm.class_id', $studentData['class_id'])->where('qm.subject_id', $params['subject_id'])->where('qm.topic_id', $params['topics']);
			$results = $this->db->get()->result_array();	 
			 
			return $results;
		}else{
			
			return "No Data";
		}
	} 
		public function getSubjectName($params) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {
			    $this->db->select('subject_name');
				$this->db->from('subject_master');
				$this->db->where('subject_id',$params['subject_id']);
				//$subjects=$this->db->get()->result();
				return $this->db->get()->row()->subject_name;
		}else{
			
			return "No Data";
		}
	} 
	
	public function getTopics($params,$studentData) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {
		  $sql = "SELECT distinct tm.topic_id, tm.topic_name FROM `quiz_master`as qm ,`subject_master` as sm,`class_master` as cm, `topic_master` as tm  WHERE qm.spikelet_id=".$params['spikelet_id']." and qm.`class_id`=".$studentData['class_id']." and qm.`subject_id`=".$params['subject_id']." and qm.`topic_id`= ".$params['topics']." and sm.`subject_id`=qm.`spikelet_id` and cm.`class_id` =qm.`class_id` and tm.`topic_id` =qm.`topic_id`";
			$q  =$this->db->query($sql);
			$results=$q->result_array();
			return $results;
		}else{
			return "No Data";
		}
	} 
	
	
	
	public function getSubtopics($params) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {			  
			$sql = "SELECT distinct stm.`sub_topic_id`,stm.`sub_topic_name` FROM `quiz_master`as qm ,`subject_master` as sm,`class_master` as cm, `topic_master` as tm, `sub_topic_master` as  stm WHERE qm.`spikelet_id`=".$params['spikelet_id']." and qm.`class_id`=".$params['class_id']." and qm.`subject_id`=".$params['subject_id']." and qm.`topic_id`=".$params['topics']." and sm.`subject_id`=qm.`subject_id` and cm.`class_id` =qm.`class_id` and tm.`topic_id` =qm.`topic_id` and stm.`sub_topic_id`=qm.`sub_topic_id`";
			$q  =$this->db->query($sql);
			$results=$q->result_array();		 
			return $results;
		}else{			
			return "No Data";
		}
	} 
	
		
	public function getQuiz($params) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {
			  
			    $sql = " SELECT  `quiz_id`,`quiz_name` FROM `quiz_master` WHERE  
				`subject_id`=".$params['subject_id']."   and `class_id`=".$params['class_id']." 
				and `topic_id`=".$params['topics']."  and `sub_topic_id`=".$params['subtopic_id']." 
				and `spikelet_id`=  ".$params['spikelet_id']." ";
			$q  =$this->db->query($sql);
			 $results=$q->result_array();
			 
			 
			 
			return $results;
		}else{
			
			return "No Data";
		}
	} 
	public function quizTakenStatus($params) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {
			$sql = " SELECT attmped_status FROM `quiz_attempted_std_status` WHERE  `student_id`=".$params['studid']." and `qz_id`=".$params['quiz_id']." ";
			$q  =$this->db->query($sql);
			$results=$q->result_array();
			return $results;
		}else{			
			return "No Data";
		}
	} 
	
	
	public function getQuizQuestions($params) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {
			$sql = " SELECT `question_id`,`qz_id`,`question`,`option_1` as opt1,`option_2` as opt2,`option_3` as opt3,`option_4`as  opt4,`hint`  FROM `quiz_questions` WHERE  `qz_id`=".$params['quiz_id']." and `question_id` not in(SELECT `question_id` FROM `quiz_answered` WHERE  `student_id`=".$params['studid']." and `qz_id`=".$params['quiz_id'].") LIMIT 1  ";
			$q  =$this->db->query($sql);
			$results=$q->row_array();
			return $results;
		}else{
			return "No Data";
		}
	} 
	 
	 public function setStdQuizStatus($params,$status) {
		if( isset($params['spikelet_id']) && !empty($params['spikelet_id'])) {
			    $data = array("student_id"=>$params['studid'],
				"qz_id"=>$params['quiz_id'],
				"student_id"=>$params['studid'],
				"attmped_status"=>$status				
				);
				
			     $result = $this->db->insert('quiz_attempted_std_status', $data);
				
			  	return $result;
		}else{
			
			return "No Data";
		}
	} 
	 
	public function get_user_details($id_users)
	{
		$this->db->select('id_users,username,first_name,last_name,email,date_created,date_updated');
		$this->db->where('id_users', $id_users);
		$q = $this->db->get('users', 1);
		return $q->result_array();
	}

	public function get_post_details($id_posts = NULL)
	{
		if ($id_posts === NULL) {
			return array();
		}
		$this->db->select('posts.id_posts,posts.title,posts.details,posts.date_created,users.id_users,users.username,users.first_name,users.last_name,users.email');
		$this->db->from('posts');
		$this->db->join('users', 'users.id_users = posts.id_users', 'left');
		$this->db->where('id_posts', $id_posts);
		$this->db->limit(1);
		$q = $this->db->get();
		return $q->result_array();
	}

	public function add_comment($comment)
	{
		return $this->db->insert('comments', $comment);
	}

	public function get_all_comments($id_posts)
	{
		$this->db->select('users.id_users,comments.id_comments,comments.comment,users.username,comments.date_created');
		$this->db->from('comments');
		$this->db->join('users', 'users.id_users = comments.id_users', 'left');
		$this->db->where('id_posts', $id_posts);
		$q = $this->db->get();
		return $q->result_array();
	}

	 
	

	public function get_post_likes_favorites($id_posts)
	{
		$this->db->where('id_posts', $id_posts);
		$this->db->where('type', 'l');
		$likes = $this->db->count_all_results('likes_favorites');

		$this->db->where('id_posts', $id_posts);
		$this->db->where('type', 'f');
		$favorites = $this->db->count_all_results('likes_favorites');
		
		return array(
			'likes' => $likes, 
			'favorites' => $favorites
			);
	}

	public function liked($id_posts,$id_users)
	{
		$this->db->where('type', 'l');
		$this->db->where('id_posts', $id_posts);
		$this->db->where('id_users', $id_users);
		return ($this->db->count_all_results('likes_favorites') > 0) ? true : false;
	}

	public function added_to_favorite($id_posts,$id_users)
	{
		$this->db->where('type', 'f');
		$this->db->where('id_posts', $id_posts);
		$this->db->where('id_users', $id_users);
		return ($this->db->count_all_results('likes_favorites') > 0) ? true : false;
	}

 
	public function check_email_username_available($type,$data)
	{
		if ($type == 'email') {
			$this->db->where('email', $data);
			return $this->db->count_all_results('users');
		}else{
			$this->db->where('username', $data);
			return $this->db->count_all_results('users');
		}
	}
	
	public function getSpikeletDetails() {
	 
			$sql = "SELECT * FROM `spikelet_master` WHERE 1";
			$q  =$this->db->query($sql);
			$results=$q->result_array();
			return $results;
		 
		 
	} 
	

}

/* End of file user.php */
/* Location: ./application/models/user.php */