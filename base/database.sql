create or replace function json_users_listado()
returns text as $$ 
declare
	Respuesta json;

begin 

select 
array_to_json (array_agg (row_to_json(datos)))
from(
	select * 
	from users
) as datos into Respuesta;

return Respuesta;
end;
$$ language 'plpgsql';

select json_users_listado()





