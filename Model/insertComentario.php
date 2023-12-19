<?php
    require_once 'config.php';  

    $comentario = $_POST['comentario'];
    $sessao = $_POST['sessao'];
    $idsessao = 0;

    mysqli_select_db($con,$dbname);

    
	$query = "SELECT idsessao FROM sessao WHERE nome_sessao = '$sessao'";
    $resultado = mysqli_query($con,$query);
    
	if(mysqli_num_rows($resultado) > 0){

        while($row = mysqli_fetch_array($resultado)){
            
            $idsessao = $row['idsessao'];
        }

    $sql ="insert into comentario (comentario, sessao_idsessao) values ('$comentario', '$idsessao')";

    if ($con->query($sql) === TRUE) {
      $data = array('status' => 'Inserido com sucesso');
      $data = array('idSessao' => $idsessao);
    
    } else {
      $data = array('status' => 'erro', 'mensagem' => $con->error);
    }

    }

    header('Content-type: application/json');
    echo json_encode($data);

    $con->close();

?>