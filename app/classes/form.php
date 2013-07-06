<?php

require_once('html.php');

class Form extends HTML{

	public static function open($action, $method = 'post', $echo = true){
		$tag = self::make_tag('<form action="%s" method="%s">', $action, $method);
		
		if($echo) 	echo $tag;
		else 		return $tag;
	}




	public static function close($echo = true){
		$tag = '</form>';

		if($echo)  	echo $tag;
		else 		return $tag;
	}




	public static function input($type, $name, $value = '', $echo = true){
		$tag = self::make_tag('<input type="%s" name="%s" id="%s" value="%s">', $type, $name, $name, $value);
		
		if($echo)  	echo $tag;
		else 		return $tag;
	}

	public static function input_placeholder($type, $name, $value = '',$place, $echo = true){
		$tag = self::make_tag('<input type="%s" name="%s" id="%s" value="%s" placeholder="%s">', $type, $name, $name, $value, $place);
		
		if($echo)  	echo $tag;
		else 		return $tag;
	}


	public static function label($id, $text, $echo = true){
		$tag = self::make_tag('<label for="%s">%s</label>', $id, $text);
		
		if($echo)  	echo $tag;
		else 		return $tag;
	}




	public static function text_row($name, $text, $value = '', $place, $echo = true){
		$tag = '<div class="row">';
		$tag .= self::label($name, $text, false);
		$tag .= self::input_placeholder('text', $name, $value, $place, false);
		$tag .= '</div>';

		if($echo)  	echo $tag;
		else 		return $tag;
	}



	public static function password_row($name, $text, $place, $echo = true){
		$tag = '<div class="password_row">';
		$tag .= self::label($name, $text, false);
		$tag .= self::input_placeholder('password', $name, '', $place, false);
		$tag .= '</div>';

		if($echo)  	echo $tag;
		else 		return $tag;
	}


	public static function submit($name = 'submit', $value = 'Submit', $echo = true){
		
		$tag = self::input('submit', $name, $value);
	
		if($echo)  	echo $tag;
		else 		return $tag;
	}


	public static function hidden($name, $value = '', $echo = true){
		$tag = self::input('hidden', $name, $value);
		
		if($echo)  	echo $tag;
		else 		return $tag;
	}


	public static function text($name, $value = '', $echo = true){
		$tag = self::input('text', $name, $value);
		
		if($echo)  	echo $tag;
		else 		return $tag;
	}


	public static function file($name, $multiple = '', $echo = true){
		$tag = self::make_tag('<input type="file" name="%s" id="%s" %s>', $name.'[]', $name, $multiple);
		
		if($echo)  	echo $tag;
		else 		return $tag;
	}
}