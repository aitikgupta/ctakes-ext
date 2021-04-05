import spacy
from datetime import timedelta
from django.utils import timezone
#from entrec.models import Text
#def run():
nlp = spacy.load("en_core_web_sm") # From module spacy, Load English tokenizer-en_core_web_sm, tagger, parser and NER
text = ("Mr. Good is a 55 y/o M with a multiple-year history of worsening RLE numbness, tingling, and burning pain. He reports this started several years ago and has progressed over the past year to include his foot. His ability to walk has worsened and he cannot even walk half of a block due to pain. He also reports several years of spontaneous ulcers on his shins and now a new ulcer to his right 2nd toe over the past 3 weeks. The patient denies any trauma or skin opening to that area. The patient was seen by a podiatrist called Dr. Myron who started him on Augmentin and a topical antifungal over 1 week ago.")
doc = nlp(text)
print("Noun phrases:", [chunk.text for chunk in doc.noun_chunks]) # Analyze syntax of the document provided as input,
print("Verbs:", [token.lemma_ for token in doc if token.pos_ == "VERB"]) # and find named entities, phrases and concepts
for entity in doc.ents:
    print(entity.text, entity.label_)
    
            #TODO- After named entity recognition, update the fiels in the db
            # from entrec.models import Document
            # from entrec.models import Text
            # t_raw_body = Text(text_content = entity.text)
            # t_raw_body.save()
            # Note that this is not a safe usage and recommended approach to 
            # saving values to the db and defeats the purpose of the app. However,
            # this can be used for testing purpose.