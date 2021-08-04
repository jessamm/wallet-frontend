use wallet;
INSERT INTO `user`(`name`,last_name,email,`password`,`admin`,validated) 
    VALUES("VM","PA","VMPA@gmail.com","123",0,1);
INSERT INTO `user`(`name`,last_name,email,`password`,`admin`,validated) 
    VALUES("JM","Manzanares","JManzanares@gmail.com","123",0,1);
INSERT INTO `user`(`name`,last_name,email,`password`,`admin`,validated) 
    VALUES("RM","RM","Roger@gmail.com","123",0,1);


INSERT INTO `mail_validation`(code_1,code_2,code_3,`code_4`,id_user) 
    VALUES(2,54,79,75,1);


INSERT INTO categorie(`name`) VALUES("Gastos Medicos");
INSERT INTO categorie(`name`) VALUES("Entretenimiento");
INSERT INTO categorie(`name`) VALUES("Alimentos");
INSERT INTO categorie(`name`) VALUES("Gastos Servicios publicos");

INSERT INTO bank_account(name_bank_account,date_out,validation_digits,number_account,id_user,mount,type_bank) 
    VALUES("BAC","2022-12-20 04:42:30","12345","122333",1,15000,"Ahorro");
INSERT INTO bank_account(name_bank_account,date_out,validation_digits,number_account,id_user,mount,type_bank) 
    VALUES("Ficohsa","2022-12-20 04:42:30","456","789456123",2,25000,"Debito");
INSERT INTO bank_account(name_bank_account,date_out,validation_digits,number_account,id_user,mount,type_bank) 
    VALUES("Lafise","2022-12-20 04:42:30","789","987654321",3,50000,"Credito");

INSERT INTO transaction_line(descripcion, id_categorie, id_account,id_user, mount) 
    VALUES("Descripcion de prueba en gastos medicos = 500",1,1,1,500);
INSERT INTO transaction_line(descripcion, id_categorie, id_account,id_user, mount) 
    VALUES("Popeyes",3,2,2,199);
INSERT INTO transaction_line(descripcion, id_categorie, id_account,id_user, mount) 
    VALUES("ENEE",1,3,3,1050);
INSERT INTO transaction_line(descripcion, id_categorie, id_account,id_user, mount) 
    VALUES("ENEE",2,3,3,1050);
INSERT INTO transaction_line(descripcion, id_categorie, id_account,id_user, mount) 
    VALUES("ENEE",,3,3,1050);
INSERT INTO transaction_line(descripcion, id_categorie, id_account,id_user, mount) 
VALUES("SANAA",4,3,3,10550);

INSERT INTO metas (name_meta, descripcion_meta, date_inicio, date_final, monto_meta, id_categorie, id_user, id_account)
    VALUES("Meta Prueba VP", "Xbox Series S", "2021-08-02 00:00:00", "2021-12-12 00:00:00",20000,2,1,1);

INSERT INTO metas (name_meta, descripcion_meta, date_inicio, date_final, monto_meta, id_categorie, id_user, id_account)
    VALUES("Meta Prueba JM", "Viaje Paris", "2021-08-02 00:00:00", "2021-12-12 00:00:00",100000,2,2,2);

INSERT INTO metas (name_meta, descripcion_meta, date_inicio, date_final, monto_meta, id_categorie, id_user, id_account)
    VALUES("Meta Prueba RM", "PC Allienware", "2021-08-02 00:00:00", "2021-12-12 00:00:00",25000,2,3,3);







/*

INSERT INTO planning(id_user,detail,date_end) 
    VALUES(1,"Bajar los gastos en L3000 en el presente mes","2021-10-17 00:49:00"); 

INSERT INTO planning_line(id_goal,id_categorie,mount_limit,mount_actual) 
    VALUES(1,2,3000,781); 

INSERT INTO goal(id_user,detail)
    VALUES(1,"Ahorrar 5000 Lempiras en el presente mes"); 


INSERT INTO goal_line(id_goal,id_categorie,mount_limit,mount_actual) 
    VALUES(1,2,5000,500);

INSERT INTO binnacle(id_user,description_operation,type_operation) 
    VALUES(1,"Se Realizo un Registro de ahorro por un valor de 781","Registro de ahorro"); 
*/