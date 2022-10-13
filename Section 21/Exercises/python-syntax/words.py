def print_upper_words(words,must_start_with):
    for word in words:
        for letter in word:
            if letter in must_start_with:
                print(word) 
            else:
                break

    
print_upper_words(['hello','goodbye','yo','yes','hey'], {'h','y'})