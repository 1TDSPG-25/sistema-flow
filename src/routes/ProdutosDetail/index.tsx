import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { TipoProduto } from "../../types/tipoProduto";
import useTheme from "../../context/useTheme";



export default function ProdutoDetail() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<TipoProduto | null>(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
