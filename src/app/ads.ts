export interface Ads {
	id: number;
	loja: string;
	imagem_principal: string;
	imagens: string;
	cod_taxa: string;
	tags: Array<tags>;
	detalhes: Array<detalhes>;
	descricao: string;
	valor_total: number;
	desconto: number;
}
export interface tags {
    name: string;
}
export interface detalhes {
    name: string;
}