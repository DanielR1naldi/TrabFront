1. Expressão Regular para o formato de telefone (telefoneRegex):

   - `^` - Representa o início da string.
   - `\(` - Corresponde ao caractere de parêntese aberto.
   - `\d{2}` - Corresponde a dois dígitos consecutivos para representar o DDD.
   - `\)` - Corresponde ao caractere de parêntese fechado.
   - `\d{2}` - Corresponde a dois dígitos consecutivos para representar os primeiros números do telefone.
   - `\d{5}` - Corresponde a cinco dígitos consecutivos para representar a parte central do número do telefone.
   - `\-\d{4}` - Corresponde ao caractere de hífen seguido de quatro dígitos consecutivos para representar os últimos números do telefone.
   - `$` - Representa o final da string.

   Portanto, esta expressão regular valida o formato de telefone no padrão brasileiro, como (99) 99999-9999 ou (99) 9999-9999.

2. Expressão Regular para o formato de e-mail (emailRegex):

   - `^` - Representa o início da string.
   - `[\w.-]+` - Corresponde a um ou mais caracteres alfanuméricos (\w), ponto (.), ou hífen (-).
   - `@` - Corresponde ao caractere "@".
   - `[a-zA-Z0-9.-]+` - Corresponde a um ou mais caracteres alfanuméricos, ponto (.), ou hífen (-) após o "@" no domínio do e-mail.
   - `\.` - Corresponde ao caractere ponto (.) no domínio do e-mail.
   - `[a-zA-Z]{2,}` - Corresponde a dois ou mais caracteres alfabéticos após o ponto (.) no domínio do e-mail.
   - `$` - Representa o final da string.

   Portanto, esta expressão regular valida o formato de e-mail padrão, como exemplo@dominio.com.
