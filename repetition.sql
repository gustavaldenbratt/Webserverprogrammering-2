/*fråga 1*/
select age from repetition2 where name like 'll%';
select name from repetition2 where sirname is null;
select * from repetition2 where name like 'J%';
select name from repetition2 where age<13;
select sirname from repetition2;
select name, age from repetition2 where sirname="Smith";
select * from repetition2 where name like "%a%";

/*fråga 2*/
create table städer (stad varchar(32), kommun varchar(32), landskap varchar(32), län varchar(32), postkod int(8), invånade int(8));

/*fråga 3*/

 insert into städer (stad, kommun, landskap, län, postkod, invånade) values ("mölnlycke", "härryda", "västergötland", "västra götaland", 43539, 20000);
  insert into städer (stad, kommun, landskap, län, postkod, invånade) values ("göteborg", "göteborg", "västergötland", "västra götaland", 41111, 200000);
    insert into städer (stad, kommun, landskap, län, postkod, invånade) values ("landvetter", "härryda", "västergötland", "västra götaland", 40000, 20000);

    /*fråga4*/

    select stad, invånade from städer where landskap="dalarna";
    select stad, invånade from städer where invånade>20000;
     select stad, invånade from städer where invånade>10000 and invånade<20000;
     select stad, invånade from städer where postkod like "4%";
      select stad, invånade from städer where län="västra götaland";
       select stad, invånade from städer where kommun like "a%";
        select stad, invånade from städer where invånade<50000;
          select stad, invånade from städer where stad like "%e%";
           select stad, invånade from städer where landskap="hälsingland" and invånade>20000;
             select stad, invånade from städer where kommun like "b%" and invånade>25000;

             /*fråga 5*/
             select * from städer order by invånade desc ;
             select * from städer order by stad ;
             select * from städer order by postkod ;


