import { Grid, Tag as TagChackra } from '@chakra-ui/react';
import { Props } from './types';

const Tag = ({ tags, selectedTags, setSelectedTags }: Props) => {

  const handleTagClick = (tagName: string) => {
    setSelectedTags(prev => {
        if (prev.includes(tagName)) {
            return prev.filter((tag) => tag !== tagName);
        }
    
        return [...prev, tagName];
    })
  };

  return (
    <Grid w='100%' display='flex' gap={2}>
      {tags?.map((item) => (
        <TagChackra
          onClick={() => handleTagClick(item.name)}
          cursor='pointer'
          colorScheme={selectedTags.includes(item.name) ? `teal` : `gray`}
          key={item.id}
        >
          {item.name}
        </TagChackra>
      ))}
    </Grid>
  );
};

export default Tag;