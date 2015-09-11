angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	
	var _getContatos = function() {
		return $http.get(config.baseURL+"/springweb/contatos");
	};
	
	var _saveContato = function(contato) {
		return $http.post(config.baseURL+"/springweb/contatos",contato);
	};
	
	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	}
})