<?php
    require_once 'config.php';
    header("Content-Type: application/json");

    $idSessao = $_POST['idSessao'];
    $dados =[];    


    mysqli_select_db($con,$dbname);

	$query = "SELECT comentario FROM comentario WHERE sessao_idsessao = $idSessao";
    $resultado = mysqli_query($con,$query);
    
	if(mysqli_num_rows($resultado) > 0){

        while($row = mysqli_fetch_array($resultado)){
                  
            array_push($dados,$row["comentario"]);
        }
         
    }else{
        $dados["comentario"] = "Nenhum registro encontrado.";
    }
	
    echo json_encode($dados);

    mysqli_close($con);

?>
