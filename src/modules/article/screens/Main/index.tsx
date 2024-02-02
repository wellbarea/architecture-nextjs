import React, { useEffect, useMemo, useRef, useState } from "react";
import { Input, Button, Text, Grid, GridItem } from "@chakra-ui/react";
import List from "../../components/List";
import State from "../../components/State";
import { useArticlesList } from "../../hooks/useArticlesList";
import { StateEnum } from "@/entities/Article";
import { useTagsQuery } from "@/services/article";
import Tag from "../../components/Tag";

const ArticleScreen = () => {
  const [state, setState] = useState(StateEnum.FRESH);
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const { data: tags = [] } = useTagsQuery();
  const { data, isLoading, isFetchingNextPage, fetchNextPage, refetch } = useArticlesList({ state, username: search, tags: selectedTags });

  const items = useMemo(() => data?.pages.flatMap((page) => page.data) ?? [], [data]);

  useEffect(() => {
    refetch();
  }, [search, state, selectedTags, refetch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLoadMoreClick = () => {
    fetchNextPage();
  };

  return (
    <Grid p={10} w='100%' display='flex' flexDirection='column' gap={5}>
      <Grid gap={6} w='100%' display='flex' flexDirection='column'>

        <Tag 
          tags={tags} 
          selectedTags={selectedTags} 
          setSelectedTags={setSelectedTags} />
        
        <GridItem w='100%'>
          <Input
            type="text"
            placeholder='Digite aqui...'
            ref={inputRef}
            value={search}
            onChange={handleInputChange}
          />
        </GridItem>

        <GridItem w='100%'>
          <State state={state} setState={(value: StateEnum) => setState(value)} />
        </GridItem>
      </Grid>

      <List data={items} />

      {items.length ? (
        <Grid w='100%' paddingTop={10} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Button
            isLoading={isFetchingNextPage && isLoading}
            colorScheme='blue'
            w={40}
            onClick={handleLoadMoreClick}
          >
            Carregar mais
          </Button>
        </Grid>
      ) : (
        <Text> Não contém informações para serem exibidas. </Text>
      )}
    </Grid>
  );
}

export default ArticleScreen;
