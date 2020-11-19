<?php
    function napolni() {
        $t1 = [];
        for($i=0; $i<70; $i++) $t1[$i] = chr(rand(65, 90));
        return $t1; 
    }

    function razvrstiNarascajoce($t1) {
        sort($t1);
        $ordered = implode('', $t1);
        
        echo "<table>";
        foreach ($t1 as $char) {
            if ($char == $t1[0])
                echo "<td class='first'>{$char}</td>";
            elseif ($char == $t1[count($t1)-1])
                echo "<td class='last'>{$char}</td>";
            else
                echo "<td>{$char}</td>";
        }

        return $ordered;
    }

    function narediT2($t1){
        $paired = array_count_values($t1);

        for ($i=65; $i<=90; $i++) 
            if (!array_key_exists(chr($i), $paired)) $paired[chr($i)] = 0;
        ksort($paired);
        return $paired;
    }
?>
